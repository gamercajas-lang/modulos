import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../../../domain/entities/usuario.entity';
import { UsuarioRepositoryPort } from '../../../ports/output/usuario-repository.port';
import { UsuarioOrmEntity } from './entities/usuario-orm.entity';

@Injectable()
export class UsuarioTypeOrmRepository implements UsuarioRepositoryPort {
  constructor(
    @InjectRepository(UsuarioOrmEntity)
    private readonly repo: Repository<UsuarioOrmEntity>,
  ) {}

  private toDomain(orm: UsuarioOrmEntity): Usuario {
    return new Usuario({
      id: orm.id,
      nombre: orm.nombre,
      apellido: orm.apellido,
      identificacion: orm.identificacion,
      idFicha: orm.idFicha,
      programaFormacionId: orm.programaFormacionId,
      telefono: orm.telefono,
      correo: orm.correo,
      passwordHash: orm.passwordHash,
      emailVerifiedAt: orm.emailVerifiedAt,
      estado: orm.estado,
      lastLoginAt: orm.lastLoginAt,
      avatarUrl: orm.avatarUrl,
      rolId: orm.rolId,
      createdAt: orm.createdAt,
      updatedAt: orm.updatedAt,
      deletedAt: orm.deletedAt,
    });
  }

  async create(data: Partial<Usuario>): Promise<Usuario> {
    const orm = this.repo.create(data as Partial<UsuarioOrmEntity>);
    const saved = await this.repo.save(orm);
    return this.toDomain(saved);
  }

  async findAll(): Promise<Usuario[]> {
    const rows = await this.repo.find({ relations: { rol: true, programaFormacion: true } });
    return rows.map((row) => this.toDomain(row));
  }

  async findById(id: number): Promise<Usuario | null> {
    const row = await this.repo.findOne({
      where: { id },
      relations: { rol: true, programaFormacion: true, permisos: true },
    });
    return row ? this.toDomain(row) : null;
  }

  async findByCorreo(correo: string): Promise<Usuario | null> {
    const row = await this.repo.findOne({ where: { correo: correo.trim().toLowerCase() } });
    return row ? this.toDomain(row) : null;
  }

  async update(id: number, data: Partial<Usuario>): Promise<Usuario | null> {
    const preloaded = await this.repo.preload({ id, ...(data as Partial<UsuarioOrmEntity>) });
    if (!preloaded) return null;
    const saved = await this.repo.save(preloaded);
    return this.toDomain(saved);
  }

  async remove(id: number): Promise<void> {
    await this.repo.softDelete(id);
  }
}
