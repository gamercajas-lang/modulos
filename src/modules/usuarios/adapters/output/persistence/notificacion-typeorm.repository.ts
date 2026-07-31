import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notificacion } from '../../../domain/entities/notificacion.entity';
import { NotificacionRepositoryPort } from '../../../ports/output/notificacion-repository.port';
import { NotificacionOrmEntity } from './entities/notificacion-orm.entity';

@Injectable()
export class NotificacionTypeOrmRepository implements NotificacionRepositoryPort {
  constructor(
    @InjectRepository(NotificacionOrmEntity)
    private readonly repo: Repository<NotificacionOrmEntity>,
  ) {}

  private toDomain(orm: NotificacionOrmEntity): Notificacion {
    return new Notificacion({
      id: orm.id,
      usuarioId: orm.usuarioId,
      titulo: orm.titulo,
      mensaje: orm.mensaje,
      leida: orm.leida,
      tipo: orm.tipo,
      metadata: orm.metadata,
      createdAt: orm.createdAt,
      updatedAt: orm.updatedAt,
      deletedAt: orm.deletedAt,
    });
  }

  async create(data: Partial<Notificacion>): Promise<Notificacion> {
    const orm = this.repo.create(data as Partial<NotificacionOrmEntity>);
    const saved = await this.repo.save(orm);
    return this.toDomain(saved);
  }

  async findAll(): Promise<Notificacion[]> {
    const rows = await this.repo.find({ order: { createdAt: 'DESC' } });
    return rows.map((row) => this.toDomain(row));
  }

  async findById(id: number): Promise<Notificacion | null> {
    const row = await this.repo.findOne({ where: { id } });
    return row ? this.toDomain(row) : null;
  }

  async update(id: number, data: Partial<Notificacion>): Promise<Notificacion | null> {
    const preloaded = await this.repo.preload({ id, ...(data as Partial<NotificacionOrmEntity>) });
    if (!preloaded) return null;
    const saved = await this.repo.save(preloaded);
    return this.toDomain(saved);
  }

  async remove(id: number): Promise<void> {
    await this.repo.softDelete(id);
  }
}
