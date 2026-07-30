import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Actividad } from './entities/actividad.entity';
import { ActividadInsumo } from './entities/actividad-insumo.entity';
import { CreateActividadDto } from './dto/create-actividad.dto';
import { UpdateActividadDto } from './dto/update-actividad.dto';

@Injectable()
export class ActividadesService {
  constructor(
    @InjectRepository(Actividad)
    private readonly actividadRepo: Repository<Actividad>,
    @InjectRepository(ActividadInsumo)
    private readonly actividadInsumoRepo: Repository<ActividadInsumo>,
  ) {}

  async create(dto: CreateActividadDto, usuarioId: string): Promise<Actividad> {
    const { insumosUtilizados, ...actividadData } = dto;

    const actividad = this.actividadRepo.create({
      ...actividadData,
      creadoPor: usuarioId,
    });

    const guardada = await this.actividadRepo.save(actividad);

    if (insumosUtilizados?.length) {
      const registros = insumosUtilizados.map((i) =>
        this.actividadInsumoRepo.create({
          actividadId: guardada.id,
          insumoId: i.insumoId,
          cantidadUtilizada: i.cantidadUtilizada,
          unidadMedida: i.unidadMedida ?? 'unidad',
        }),
      );
      await this.actividadInsumoRepo.save(registros);

      // TODO integración con Proveedores-Insumos (P4):
      // descontar `cantidadUtilizada` del stock del insumo correspondiente.
      // Ej: await this.insumosService.descontarStock(i.insumoId, i.cantidadUtilizada)
    }

    return this.findOne(guardada.id);
  }

  findAll(loteId?: string, estado?: string): Promise<Actividad[]> {
    const where: Record<string, unknown> = {};
    if (loteId) where.loteId = loteId;
    if (estado) where.estado = estado;

    return this.actividadRepo.find({
      where,
      relations: ['lote', 'responsable', 'insumosUtilizados'],
      order: { fecha: 'DESC' },
    });
  }

  async findOne(id: string): Promise<Actividad> {
    const actividad = await this.actividadRepo.findOne({
      where: { id },
      relations: ['lote', 'responsable', 'insumosUtilizados'],
    });
    if (!actividad) throw new NotFoundException(`Actividad ${id} no encontrada`);
    return actividad;
  }

  async update(id: string, dto: UpdateActividadDto): Promise<Actividad> {
    const actividad = await this.findOne(id);
    Object.assign(actividad, dto);
    await this.actividadRepo.save(actividad);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    const actividad = await this.findOne(id);
    await this.actividadRepo.remove(actividad);
  }
}
