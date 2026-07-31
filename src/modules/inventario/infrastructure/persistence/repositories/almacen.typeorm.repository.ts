import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IAlmacenRepository } from '../../../domain/ports/almacen.repository.port';
import { Almacen } from '../../../domain/models/almacen.model';
import { AlmacenEntity } from '../entities/almacen.entity';
import { AlmacenMapper } from '../mappers/almacen.mapper';

@Injectable()
export class TypeOrmAlmacenRepository implements IAlmacenRepository {
  constructor(
    @InjectRepository(AlmacenEntity)
    private readonly repository: Repository<AlmacenEntity>,
  ) {}

  async create(almacen: Partial<Almacen>): Promise<Almacen> {
    const persistence = AlmacenMapper.toPersistence(almacen);
    const saved = await this.repository.save(persistence);
    return AlmacenMapper.toDomain(saved);
  }

  async findById(id: number): Promise<Almacen | null> {
    const found = await this.repository.findOne({ where: { id } });
    return found ? AlmacenMapper.toDomain(found) : null;
  }

  async findAll(): Promise<Almacen[]> {
    const all = await this.repository.find();
    return all.map(AlmacenMapper.toDomain);
  }

  async update(id: number, almacen: Partial<Almacen>): Promise<Almacen | null> {
    const existing = await this.repository.findOne({ where: { id } });
    if (!existing) return null;
    const persistence = AlmacenMapper.toPersistence({ ...existing, ...almacen });
    persistence.id = id;
    const saved = await this.repository.save(persistence);
    return AlmacenMapper.toDomain(saved);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.repository.softDelete(id);
    return (result.affected ?? 0) > 0;
  }
}
