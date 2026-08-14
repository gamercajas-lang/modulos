import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IInsumoRepository } from '../../../domain/ports/insumo.repository.port';
import { Insumo } from '../../../domain/models/insumo.model';
import { InsumoEntity } from '../entities/insumo.entity';
import { InsumoMapper } from '../mappers/insumo.mapper';

@Injectable()
export class TypeOrmInsumoRepository implements IInsumoRepository {
  constructor(
    @InjectRepository(InsumoEntity)
    private readonly repository: Repository<InsumoEntity>,
  ) {}

  async create(insumo: Partial<Insumo>): Promise<Insumo> {
    const persistence = InsumoMapper.toPersistence(insumo);
    const saved = await this.repository.save(persistence ?? {});
    return InsumoMapper.toDomain(saved)!;
  }

  async findById(id: number): Promise<Insumo | null> {
    const found = await this.repository.findOne({
      where: { id },
      relations: ['almacen', 'categoria'],
    });
    return InsumoMapper.toDomain(found);
  }

  async findAll(): Promise<Insumo[]> {
    const all = await this.repository.find({ relations: ['almacen', 'categoria'] });
    return all
      .map((item) => InsumoMapper.toDomain(item))
      .filter((item): item is Insumo => item !== null);
  }

  async update(id: number, insumo: Partial<Insumo>): Promise<Insumo | null> {
    const existing = await this.repository.findOne({ where: { id } });
    if (!existing) return null;
    const persistence = InsumoMapper.toPersistence({ ...existing, ...insumo });
    if (!persistence) return null;
    persistence.id = id;
    const saved = await this.repository.save(persistence);
    return InsumoMapper.toDomain(saved);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.repository.softDelete(id);
    return (result.affected ?? 0) > 0;
  }
}
