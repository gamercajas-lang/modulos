import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ILoteProduccionRepository } from '../../../domain/ports/lote-produccion.repository.port';
import { LoteProduccion } from '../../../domain/models/lote-produccion.model';
import { LoteProduccionEntity } from '../entities/lote-produccion.entity';
import { LoteProduccionMapper } from '../mappers/lote-produccion.mapper';

@Injectable()
export class TypeOrmLoteProduccionRepository implements ILoteProduccionRepository {
  constructor(
    @InjectRepository(LoteProduccionEntity)
    private readonly repository: Repository<LoteProduccionEntity>,
  ) {}

  async create(lote: Partial<LoteProduccion>): Promise<LoteProduccion> {
    const persistence = LoteProduccionMapper.toPersistence(lote);
    const saved = await this.repository.save(persistence ?? {});
    return LoteProduccionMapper.toDomain(saved)!;
  }

  async findById(id: number): Promise<LoteProduccion | null> {
    const found = await this.repository.findOne({
      where: { id },
      relations: ['productoAgro'],
    });
    return LoteProduccionMapper.toDomain(found);
  }

  async findAll(): Promise<LoteProduccion[]> {
    const all = await this.repository.find({ relations: ['productoAgro'] });
    return all
      .map((item) => LoteProduccionMapper.toDomain(item))
      .filter((item): item is LoteProduccion => item !== null);
  }

  async update(id: number, lote: Partial<LoteProduccion>): Promise<LoteProduccion | null> {
    const existing = await this.repository.findOne({ where: { id } });
    if (!existing) return null;
    const persistence = LoteProduccionMapper.toPersistence({ ...existing, ...lote });
    if (!persistence) return null;
    persistence.id = id;
    const saved = await this.repository.save(persistence);
    return LoteProduccionMapper.toDomain(saved);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.repository.softDelete(id);
    return (result.affected ?? 0) > 0;
  }
}
