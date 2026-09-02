import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { MovimientoInsumo } from '../../../domain/entities/movimiento-insumo.entity';
import { MovimientoInsumoRepositoryPort } from '../../../ports/output/movimiento-insumo.repository.port';

@Injectable()
export class MovimientosInsumosRepository
  implements MovimientoInsumoRepositoryPort
{
  constructor(
    @InjectRepository(MovimientoInsumo)
    private readonly repository: Repository<MovimientoInsumo>,
  ) {}

  async create(
    movimientoInsumo: MovimientoInsumo,
  ): Promise<MovimientoInsumo> {
    return await this.repository.save(movimientoInsumo);
  }

  async findAll(): Promise<MovimientoInsumo[]> {
    return await this.repository.find();
  }

  async findById(id: number): Promise<MovimientoInsumo | null> {
    return await this.repository.findOne({
      where: { id },
    });
  }

  async update(
    id: number,
    movimientoInsumo: Partial<MovimientoInsumo>,
  ): Promise<MovimientoInsumo> {
    await this.repository.update(id, movimientoInsumo);
    return (await this.findById(id))!;
  }

  async delete(id: number): Promise<void> {
    await this.repository.softDelete(id);
  }
}