import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoFormacion } from '../../../domain/entities/tipo-formacion.entity';
import { TipoFormacionRepositoryPort } from '../../../ports/output/tipo-formacion-repository.port';
import { TipoFormacionOrmEntity } from './entities/tipo-formacion-orm.entity';

@Injectable()
export class TipoFormacionTypeOrmRepository implements TipoFormacionRepositoryPort {
  constructor(
    @InjectRepository(TipoFormacionOrmEntity)
    private readonly repo: Repository<TipoFormacionOrmEntity>,
  ) {}

  private toDomain(orm: TipoFormacionOrmEntity): TipoFormacion {
    return new TipoFormacion({
      id: orm.id,
      codigo: orm.codigo,
      nombre: orm.nombre,
      descripcion: orm.descripcion,
      activo: orm.activo,
      orden: orm.orden,
      createdAt: orm.createdAt,
      updatedAt: orm.updatedAt,
      deletedAt: orm.deletedAt,
    });
  }

  async create(data: Partial<TipoFormacion>): Promise<TipoFormacion> {
    const orm = this.repo.create(data as Partial<TipoFormacionOrmEntity>);
    const saved = await this.repo.save(orm);
    return this.toDomain(saved);
  }

  async findAll(): Promise<TipoFormacion[]> {
    const rows = await this.repo.find({ order: { orden: 'ASC' } });
    return rows.map((row) => this.toDomain(row));
  }

  async findById(id: number): Promise<TipoFormacion | null> {
    const row = await this.repo.findOne({ where: { id } });
    return row ? this.toDomain(row) : null;
  }

  async update(id: number, data: Partial<TipoFormacion>): Promise<TipoFormacion | null> {
    const preloaded = await this.repo.preload({ id, ...(data as Partial<TipoFormacionOrmEntity>) });
    if (!preloaded) return null;
    const saved = await this.repo.save(preloaded);
    return this.toDomain(saved);
  }

  async remove(id: number): Promise<void> {
    await this.repo.softDelete(id);
  }
}
