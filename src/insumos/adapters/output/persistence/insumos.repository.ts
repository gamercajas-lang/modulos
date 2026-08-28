import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Insumo } from '../../../domain/entities/insumo.entity';
import { InsumoRepositoryPort } from '../../../ports/output/insumo.repository.port';

@Injectable()
export class InsumosRepository implements InsumoRepositoryPort {
  constructor(
    @InjectRepository(Insumo)
    private readonly repository: Repository<Insumo>,
  ) {}

  async create(insumo: Insumo): Promise<Insumo> {
    return await this.repository.save(insumo);
  }

  async findAll(): Promise<Insumo[]> {
    return await this.repository.find();
  }

  async findById(id: number): Promise<Insumo | null> {
    return await this.repository.findOne({ where: { id } });
  }

  async update(id: number, insumo: Partial<Insumo>): Promise<Insumo> {
    await this.repository.update(id, insumo);

    const insumoActualizado = await this.findById(id);
    if (!insumoActualizado) {
      throw new NotFoundException('Insumo no encontrado');
    }

    return insumoActualizado;
  }

  async delete(id: number): Promise<void> {
    // Soft delete: llena deleted_at en vez de borrar la fila.
    await this.repository.softDelete(id);
  }

  async save(insumo: Insumo): Promise<Insumo> {
    return await this.repository.save(insumo);
  }
}
