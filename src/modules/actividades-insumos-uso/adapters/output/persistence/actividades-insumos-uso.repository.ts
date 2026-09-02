import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ActividadInsumoUso } from '../../../domain/entities/actividad-insumo-uso.entity';
import type { ActividadInsumoUsoRepositoryPort } from '../../../ports/output/actividad-insumo-uso.repository.port';

@Injectable()
export class ActividadesInsumosUsoRepository
  implements ActividadInsumoUsoRepositoryPort
{
  constructor(
    @InjectRepository(ActividadInsumoUso)
    private readonly repository: Repository<ActividadInsumoUso>,
  ) {}

  async create(
    actividadInsumoUso: ActividadInsumoUso,
  ): Promise<ActividadInsumoUso> {
    return await this.repository.save(actividadInsumoUso);
  }

  async findAll(): Promise<ActividadInsumoUso[]> {
    return await this.repository.find();
  }

  async findById(id: number): Promise<ActividadInsumoUso | null> {
    return await this.repository.findOne({
      where: { id },
    });
  }

  async update(
    id: number,
    actividadInsumoUso: Partial<ActividadInsumoUso>,
  ): Promise<ActividadInsumoUso> {
    await this.repository.update(id, actividadInsumoUso);

    const actividadActualizada = await this.findById(id);

    if (!actividadActualizada) {
      throw new NotFoundException(
        'Actividad Insumo Uso no encontrada',
      );
    }

    return actividadActualizada;
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}