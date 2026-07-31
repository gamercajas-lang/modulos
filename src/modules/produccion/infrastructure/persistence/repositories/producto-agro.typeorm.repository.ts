import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IProductoAgroRepository } from '../../../domain/ports/producto-agro.repository.port';
import { ProductoAgro } from '../../../domain/models/producto-agro.model';
import { ProductoAgroEntity } from '../entities/producto-agro.entity';
import { ProductoAgroMapper } from '../mappers/producto-agro.mapper';

@Injectable()
export class TypeOrmProductoAgroRepository implements IProductoAgroRepository {
  constructor(
    @InjectRepository(ProductoAgroEntity)
    private readonly repository: Repository<ProductoAgroEntity>,
  ) {}

  async create(producto: Partial<ProductoAgro>): Promise<ProductoAgro> {
    const persistence = ProductoAgroMapper.toPersistence(producto);
    const saved = await this.repository.save(persistence);
    return ProductoAgroMapper.toDomain(saved);
  }

  async findById(id: number): Promise<ProductoAgro | null> {
    const found = await this.repository.findOne({ where: { id } });
    return found ? ProductoAgroMapper.toDomain(found) : null;
  }

  async findAll(): Promise<ProductoAgro[]> {
    const all = await this.repository.find();
    return all.map(ProductoAgroMapper.toDomain);
  }

  async update(id: number, producto: Partial<ProductoAgro>): Promise<ProductoAgro | null> {
    const existing = await this.repository.findOne({ where: { id } });
    if (!existing) return null;
    const persistence = ProductoAgroMapper.toPersistence({ ...existing, ...producto });
    persistence.id = id;
    const saved = await this.repository.save(persistence);
    return ProductoAgroMapper.toDomain(saved);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.repository.softDelete(id);
    return (result.affected ?? 0) > 0;
  }
}
