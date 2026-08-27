import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';
import { Venta } from './entities/venta.entity';
import { VentaDetalle } from './entities/venta-detalle.entity';
import { Pago } from './entities/pago.entity';
import { Factura } from './entities/factura.entity';

@Injectable()
export class VentasService {
  constructor(
    @InjectRepository(Cliente) private readonly clientes: Repository<Cliente>,
    @InjectRepository(Venta) private readonly ventas: Repository<Venta>,
    @InjectRepository(VentaDetalle) private readonly detalles: Repository<VentaDetalle>,
    @InjectRepository(Pago) private readonly pagos: Repository<Pago>,
    @InjectRepository(Factura) private readonly facturas: Repository<Factura>,
  ) {}

  async clientesAll() { return this.clientes.find(); }

  async clientesOne(id: number) {
    const x = await this.clientes.findOne({ where: { id } });
    if (!x) throw new NotFoundException('Cliente no encontrado');
    return x;
  }

  async clientesCreate(data: any) {
    return this.clientes.save(this.clientes.create(data));
  }

  async clientesUpdate(id: number, data: any) {
    await this.clientesOne(id);
    return this.clientes.save({ id, ...data });
  }

  async clientesRemove(id: number) {
    const x = await this.clientesOne(id);
    await this.clientes.softRemove(x);
    return { message: 'Cliente eliminado', id };
  }

  async ventasAll() {
    return this.ventas.find({ relations: ['detalles', 'pagos', 'facturas'] });
  }

  async ventasOne(id: number) {
    const x = await this.ventas.findOne({
      where: { id },
      relations: ['detalles', 'pagos', 'facturas'],
    });
    if (!x) throw new NotFoundException('Venta no encontrada');
    return x;
  }

  async ventasCreate(data: any) {
    return this.ventas.save(this.ventas.create(data));
  }

  async ventasUpdate(id: number, data: any) {
    await this.ventasOne(id);
    return this.ventas.save({ id, ...data });
  }

  async ventasRemove(id: number) {
    const x = await this.ventasOne(id);
    await this.ventas.softRemove(x);
    return { message: 'Venta eliminada', id };
  }

  // Repositorios de entidades diferentes producen una unión de tipos
  // incompatible al indexarlos dinámicamente. Se centraliza como Repository<any>.
  private map(): Record<string, Repository<any>> {
    return {
      detalles: this.detalles,
      pagos: this.pagos,
      facturas: this.facturas,
    };
  }

  async childAll(k: string) {
    return this.map()[k].find();
  }

  async childOne(k: string, id: number) {
    const x = await this.map()[k].findOne({ where: { id } });
    if (!x) throw new NotFoundException('Registro no encontrado');
    return x;
  }

  async childCreate(k: string, data: any) {
    return this.map()[k].save(data);
  }

  async childUpdate(k: string, id: number, data: any) {
    await this.childOne(k, id);
    return this.map()[k].save({ id, ...data });
  }

  async childRemove(k: string, id: number) {
    const x = await this.childOne(k, id);
    await this.map()[k].softRemove(x);
    return { message: 'Registro eliminado', id };
  }
}
