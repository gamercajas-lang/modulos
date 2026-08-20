import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SeedExecutionLog } from '../../domain/entities/seed-execution-log.entity';
import { SeedExecutionLogRepositoryPort } from '../../domain/ports/seed-execution-log-repository.port';
import { SeedExecutionLogOrmEntity } from './seed-execution-log.orm-entity';

@Injectable()
export class SeedExecutionLogTypeOrmRepository implements SeedExecutionLogRepositoryPort {
  constructor(
    @InjectRepository(SeedExecutionLogOrmEntity)
    private readonly repo: Repository<SeedExecutionLogOrmEntity>,
  ) {}

  private toDomain(orm: SeedExecutionLogOrmEntity): SeedExecutionLog {
    return new SeedExecutionLog(orm.id, orm.seedName, orm.executedAt, orm.description);
  }

  async save(log: SeedExecutionLog): Promise<SeedExecutionLog> {
    const orm = this.repo.create({
      seedName: log.seedName,
      description: log.description ?? undefined,
    });
    const saved = await this.repo.save(orm);
    return this.toDomain(saved);
  }

  async findAll(): Promise<SeedExecutionLog[]> {
    const all = await this.repo.find();
    return all.map((orm) => this.toDomain(orm));
  }

  async findBySeedName(seedName: string): Promise<SeedExecutionLog | null> {
    const orm = await this.repo.findOneBy({ seedName });
    return orm ? this.toDomain(orm) : null;
  }

  async delete(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
