import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ActividadInsumo } from '../../../domain/entities/actividad-insumo.entity';
import { ActividadInsumoRepositoryPort } from '../../../ports/output/actividad-insumo.repository.port';

@Injectable()
export class ActividadInsumosRepository extends ActividadInsumoRepositoryPort {
  constructor(
    @InjectRepository(ActividadInsumo)
    private readonly repository: Repository<ActividadInsumo>,
  ) {
    super();
  }

  async create(actividadInsumo: ActividadInsumo): Promise<ActividadInsumo> {
    return await this.repository.save(actividadInsumo);
  }

  async findAll(): Promise<ActividadInsumo[]> {
    return await this.repository.find();
  }

  async findById(id: number): Promise<ActividadInsumo | null> {
    return await this.repository.findOne({
      where: { id },
    });
  }

  async update(
    id: number,
    actividadInsumo: Partial<ActividadInsumo>,
  ): Promise<ActividadInsumo> {
    await this.repository.update(id, actividadInsumo);

    const actualizado = await this.findById(id);

    if (!actualizado) {
      throw new NotFoundException('ActividadInsumo no encontrado');
    }

    return actualizado;
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}