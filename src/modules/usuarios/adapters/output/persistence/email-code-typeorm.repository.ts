import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThan, Repository } from 'typeorm';
import { EmailCode } from '../../../domain/entities/email-code.entity';
import { EmailCodeRepositoryPort } from '../../../ports/output/email-code-repository.port';
import { EmailCodeOrmEntity } from './entities/email-code-orm.entity';

/**
 * Repositorio de soporte: no tiene controller ni use-cases propios,
 * queda disponible para ser consumido por un futuro modulo de auth.
 */
@Injectable()
export class EmailCodeTypeOrmRepository implements EmailCodeRepositoryPort {
  constructor(
    @InjectRepository(EmailCodeOrmEntity)
    private readonly repo: Repository<EmailCodeOrmEntity>,
  ) {}

  private toDomain(orm: EmailCodeOrmEntity): EmailCode {
    return new EmailCode({
      id: orm.id,
      usuarioId: orm.usuarioId,
      tipo: orm.tipo,
      code: orm.code,
      expiresAt: orm.expiresAt,
      usedAt: orm.usedAt,
      createdAt: orm.createdAt,
      updatedAt: orm.updatedAt,
      deletedAt: orm.deletedAt,
    });
  }

  async create(data: Partial<EmailCode>): Promise<EmailCode> {
    const orm = this.repo.create(data as Partial<EmailCodeOrmEntity>);
    const saved = await this.repo.save(orm);
    return this.toDomain(saved);
  }

  async findById(id: number): Promise<EmailCode | null> {
    const row = await this.repo.findOne({ where: { id } });
    return row ? this.toDomain(row) : null;
  }

  async findValidCode(usuarioId: number, tipo: string, code: string): Promise<EmailCode | null> {
    const row = await this.repo.findOne({
      where: { usuarioId, tipo, code, expiresAt: MoreThan(new Date()) },
    });
    return row ? this.toDomain(row) : null;
  }

  async remove(id: number): Promise<void> {
    await this.repo.softDelete(id);
  }
}
