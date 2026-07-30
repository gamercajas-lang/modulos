import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Venta } from './entities/venta.entity';
import { DetalleVenta } from './entities/detalle-venta.entity';
import { EstadoVenta } from './entities/venta-enums';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';

@Injectable()
export class VentasService {
  constructor(
    @InjectRepository(Venta)
    private readonly ventaRepo: Repository<Venta>,
    @InjectRepository(DetalleVenta)
    private readonly detalleRepo: Repository<DetalleVenta>,
  ) {}

  async create(dto: CreateVentaDto, usuarioId: string): Promise<Venta> {
    const { detalles, impuestos = 0, ...ventaData } = dto;

    const detallesCalculados = detalles.map((d) => ({
      ...d,
      subtotal: Number((d.cantidad * d.precioUnitario).toFixed(2)),
    }));

    const subtotal = detallesCalculados.reduce((acc, d) => acc + d.subtotal, 0);
    const total = Number((subtotal + impuestos).toFixed(2));

    const venta = this.ventaRepo.create({
      ...ventaData,
      subtotal,
      impuestos,
      total,
      creadoPor: usuarioId,
      detalles: detallesCalculados as DetalleVenta[],
    });

    const guardada = await this.ventaRepo.save(venta);

    // TODO integración con Producción/Inventario (P3):
    // por cada detalle, descontar `cantidad` del stock disponible en Produccion.
    // Ej: await this.produccionService.descontarStock(d.produccionId, d.cantidad)

    return this.findOne(guardada.id);
  }

  findAll(estado?: string, vendedorId?: string): Promise<Venta[]> {
    const where: Record<string, unknown> = {};
    if (estado) where.estado = estado;
    if (vendedorId) where.vendedorId = vendedorId;

    return this.ventaRepo.find({
      where,
      relations: ['vendedor', 'detalles', 'detalles.produccion'],
      order: { fecha: 'DESC' },
    });
  }

  async findOne(id: string): Promise<Venta> {
    const venta = await this.ventaRepo.findOne({
      where: { id },
      relations: ['vendedor', 'detalles', 'detalles.produccion'],
    });
    if (!venta) throw new NotFoundException(`Venta ${id} no encontrada`);
    return venta;
  }

  async update(id: string, dto: UpdateVentaDto): Promise<Venta> {
    const venta = await this.findOne(id);

    if (venta.estado === EstadoVenta.ANULADA) {
      throw new BadRequestException('No se puede modificar una venta anulada');
    }

    Object.assign(venta, dto);
    await this.ventaRepo.save(venta);
    return this.findOne(id);
  }

  async anular(id: string): Promise<Venta> {
    const venta = await this.findOne(id);
    venta.estado = EstadoVenta.ANULADA;
    await this.ventaRepo.save(venta);

    // TODO integración con Producción/Inventario (P3):
    // revertir el stock descontado al anular la venta.

    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    const venta = await this.findOne(id);
    await this.ventaRepo.remove(venta);
  }
}
