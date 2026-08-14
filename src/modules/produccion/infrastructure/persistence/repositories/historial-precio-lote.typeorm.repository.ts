import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IHistorialPrecioLoteRepository } from '../../../domain/ports/historial-precio-lote.repository.port';
import { HistorialPrecioLote } from '../../../domain/models/historial-precio-lote.model';
import { HistorialPrecioLoteEntity } from '../entities/historial-precio-lote.entity';
import { HistorialPrecioLoteMapper } from '../mappers/historial-precio-lote.mapper';

@Injectable()
export class TypeOrmHistorialPrecioLoteRepository implements IHistorialPrecioLoteRepository {
  constructor(
    @InjectRepository(HistorialPrecioLoteEntity)
    private readonly repository: Repository<HistorialPrecioLoteEntity>,
  ) {}

  async create(historial: Partial<HistorialPrecioLote>): Promise<HistorialPrecioLote> {
    const persistence = HistorialPrecioLoteMapper.toPersistence(historial);
    const saved = await this.repository.save(persistence ?? {});
    return HistorialPrecioLoteMapper.toDomain(saved)!;
  }

  async findById(id: number): Promise<HistorialPrecioLote | null> {
    const found = await this.repository.findOne({
      where: { id },
      relations: ['loteProduccion'],
    });
    return HistorialPrecioLoteMapper.toDomain(found);
  }

  async findAll(): Promise<HistorialPrecioLote[]> {
    const all = await this.repository.find({ relations: ['loteProduccion'] });
    return all
      .map((item) => HistorialPrecioLoteMapper.toDomain(item))
      .filter((item): item is HistorialPrecioLote => item !== null);
  }

  async update(id: number, historial: Partial<HistorialPrecioLote>): Promise<HistorialPrecioLote | null> {
    const existing = await this.repository.findOne({ where: { id } });
    if (!existing) return null;
    const persistence = HistorialPrecioLoteMapper.toPersistence({ ...existing, ...historial });
    if (!persistence) return null;
    persistence.id = id;
    const saved = await this.repository.save(persistence);
    return HistorialPrecioLoteMapper.toDomain(saved);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.repository.softDelete(id);
    return (result.affected ?? 0) > 0;
  }
}
