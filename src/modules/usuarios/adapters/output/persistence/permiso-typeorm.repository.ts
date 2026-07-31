import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permiso } from '../../../domain/entities/permiso.entity';
import { PermisoRepositoryPort } from '../../../ports/output/permiso-repository.port';
import { PermisoOrmEntity } from './entities/permiso-orm.entity';

@Injectable()
export class PermisoTypeOrmRepository implements PermisoRepositoryPort {
  constructor(
    @InjectRepository(PermisoOrmEntity)
    private readonly repo: Repository<PermisoOrmEntity>,
  ) {}

  private toDomain(orm: PermisoOrmEntity): Permiso {
    return new Permiso({
      id: orm.id,
      modulo: orm.modulo,
      accion: orm.accion,
      clave: orm.clave,
      createdAt: orm.createdAt,
      updatedAt: orm.updatedAt,
      deletedAt: orm.deletedAt,
    });
  }

  async create(data: Partial<Permiso>): Promise<Permiso> {
    const orm = this.repo.create(data as Partial<PermisoOrmEntity>);
    const saved = await this.repo.save(orm);
    return this.toDomain(saved);
  }

  async findAll(): Promise<Permiso[]> {
    const rows = await this.repo.find();
    return rows.map((row) => this.toDomain(row));
  }

  async findById(id: number): Promise<Permiso | null> {
    const row = await this.repo.findOne({ where: { id } });
    return row ? this.toDomain(row) : null;
  }

  async update(id: number, data: Partial<Permiso>): Promise<Permiso | null> {
    const preloaded = await this.repo.preload({ id, ...(data as Partial<PermisoOrmEntity>) });
    if (!preloaded) return null;
    const saved = await this.repo.save(preloaded);
    return this.toDomain(saved);
  }

  async remove(id: number): Promise<void> {
    await this.repo.softDelete(id);
  }
}
