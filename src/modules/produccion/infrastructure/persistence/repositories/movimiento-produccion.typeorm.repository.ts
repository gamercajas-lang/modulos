import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IMovimientoProduccionRepository } from '../../../domain/ports/movimiento-produccion.repository.port';
import { MovimientoProduccion } from '../../../domain/models/movimiento-produccion.model';
import { MovimientoProduccionEntity } from '../entities/movimiento-produccion.entity';
import { MovimientoProduccionMapper } from '../mappers/movimiento-produccion.mapper';

@Injectable()
export class TypeOrmMovimientoProduccionRepository implements IMovimientoProduccionRepository {
  constructor(
    @InjectRepository(MovimientoProduccionEntity)
    private readonly repository: Repository<MovimientoProduccionEntity>,
  ) {}

  async create(movimiento: Partial<MovimientoProduccion>): Promise<MovimientoProduccion> {
    const persistence = MovimientoProduccionMapper.toPersistence(movimiento);
    const saved = await this.repository.save(persistence);
    return MovimientoProduccionMapper.toDomain(saved);
  }

  async findById(id: number): Promise<MovimientoProduccion | null> {
    const found = await this.repository.findOne({
      where: { id },
      relations: ['loteProduccion'],
    });
    return found ? MovimientoProduccionMapper.toDomain(found) : null;
  }

  async findAll(): Promise<MovimientoProduccion[]> {
    const all = await this.repository.find({ relations: ['loteProduccion'] });
    return all.map(MovimientoProduccionMapper.toDomain);
  }

  async update(id: number, movimiento: Partial<MovimientoProduccion>): Promise<MovimientoProduccion | null> {
    const existing = await this.repository.findOne({ where: { id } });
    if (!existing) return null;
    const persistence = MovimientoProduccionMapper.toPersistence({ ...existing, ...movimiento });
    persistence.id = id;
    const saved = await this.repository.save(persistence);
    return MovimientoProduccionMapper.toDomain(saved);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.repository.softDelete(id);
    return (result.affected ?? 0) > 0;
  }
}
