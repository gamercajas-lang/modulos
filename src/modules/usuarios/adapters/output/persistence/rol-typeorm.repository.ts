import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rol } from '../../../domain/entities/rol.entity';
import { RolRepositoryPort } from '../../../ports/output/rol-repository.port';
import { RolOrmEntity } from './entities/rol-orm.entity';

@Injectable()
export class RolTypeOrmRepository implements RolRepositoryPort {
  constructor(
    @InjectRepository(RolOrmEntity)
    private readonly repo: Repository<RolOrmEntity>,
  ) {}

  private toDomain(orm: RolOrmEntity): Rol {
    return new Rol({
      id: orm.id,
      nombre: orm.nombre,
      descripcion: orm.descripcion,
      esSistema: orm.esSistema,
      estado: orm.estado,
      createdAt: orm.createdAt,
      updatedAt: orm.updatedAt,
      deletedAt: orm.deletedAt,
    });
  }

  async create(data: Partial<Rol>): Promise<Rol> {
    const orm = this.repo.create(data as Partial<RolOrmEntity>);
    const saved = await this.repo.save(orm);
    return this.toDomain(saved);
  }

  async findAll(): Promise<Rol[]> {
    const rows = await this.repo.find({ relations: { permisos: true } });
    return rows.map((row) => this.toDomain(row));
  }

  async findById(id: number): Promise<Rol | null> {
    const row = await this.repo.findOne({
      where: { id },
      relations: { permisos: true },
    });
    return row ? this.toDomain(row) : null;
  }

  async update(id: number, data: Partial<Rol>): Promise<Rol | null> {
    const preloaded = await this.repo.preload({ id, ...(data as Partial<RolOrmEntity>) });
    if (!preloaded) return null;
    const saved = await this.repo.save(preloaded);
    return this.toDomain(saved);
  }

  async remove(id: number): Promise<void> {
    await this.repo.softDelete(id);
  }
}
