import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TelegramFormEstado } from '../../../domain/entities/telegram-form-estado.entity';
import { TelegramFormEstadoRepositoryPort } from '../../../ports/output/telegram-form-estado-repository.port';
import { TelegramFormEstadoOrmEntity } from './entities/telegram-form-estado-orm.entity';

/**
 * Repositorio de soporte: no tiene controller ni use-cases propios,
 * queda disponible para ser consumido por el bot de Telegram.
 */
@Injectable()
export class TelegramFormEstadoTypeOrmRepository implements TelegramFormEstadoRepositoryPort {
  constructor(
    @InjectRepository(TelegramFormEstadoOrmEntity)
    private readonly repo: Repository<TelegramFormEstadoOrmEntity>,
  ) {}

  private toDomain(orm: TelegramFormEstadoOrmEntity): TelegramFormEstado {
    return new TelegramFormEstado({
      id: orm.id,
      userId: orm.userId,
      step: orm.step,
      data: orm.data,
      estado: orm.estado,
      accessToken: orm.accessToken,
      updatedAt: orm.updatedAt,
    });
  }

  async create(data: Partial<TelegramFormEstado>): Promise<TelegramFormEstado> {
    const orm = this.repo.create(data as Partial<TelegramFormEstadoOrmEntity>);
    const saved = await this.repo.save(orm);
    return this.toDomain(saved);
  }

  async findByUserId(userId: string): Promise<TelegramFormEstado | null> {
    const row = await this.repo.findOne({ where: { userId } });
    return row ? this.toDomain(row) : null;
  }

  async update(id: number, data: Partial<TelegramFormEstado>): Promise<TelegramFormEstado | null> {
    const preloaded = await this.repo.preload({
      id,
      ...(data as Partial<TelegramFormEstadoOrmEntity>),
    });
    if (!preloaded) return null;
    const saved = await this.repo.save(preloaded);
    return this.toDomain(saved);
  }

  async remove(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
