import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ICategoriaRepository } from '../../../domain/ports/categoria.repository.port';
import { Categoria } from '../../../domain/models/categoria.model';
import { CategoriaEntity } from '../entities/categoria.entity';
import { CategoriaMapper } from '../mappers/categoria.mapper';

@Injectable()
export class TypeOrmCategoriaRepository implements ICategoriaRepository {
  constructor(
    @InjectRepository(CategoriaEntity)
    private readonly repository: Repository<CategoriaEntity>,
  ) {}

  async create(categoria: Partial<Categoria>): Promise<Categoria> {
    const persistence = CategoriaMapper.toPersistence(categoria);
    const saved = await this.repository.save(persistence ?? {});
    return CategoriaMapper.toDomain(saved)!;
  }

  async findById(id: number): Promise<Categoria | null> {
    const found = await this.repository.findOne({ where: { id } });
    return CategoriaMapper.toDomain(found);
  }

  async findAll(): Promise<Categoria[]> {
    const all = await this.repository.find();
    return all
      .map((item) => CategoriaMapper.toDomain(item))
      .filter((item): item is Categoria => item !== null);
  }

  async update(id: number, categoria: Partial<Categoria>): Promise<Categoria | null> {
    const existing = await this.repository.findOne({ where: { id } });
    if (!existing) return null;
    const persistence = CategoriaMapper.toPersistence({ ...existing, ...categoria });
    if (!persistence) return null;
    persistence.id = id;
    const saved = await this.repository.save(persistence);
    return CategoriaMapper.toDomain(saved);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.repository.softDelete(id);
    return (result.affected ?? 0) > 0;
  }
}
