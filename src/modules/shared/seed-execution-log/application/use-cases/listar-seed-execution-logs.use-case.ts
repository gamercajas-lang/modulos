import { Inject, Injectable } from '@nestjs/common';
import { SeedExecutionLog } from '../../domain/entities/seed-execution-log.entity';
import { SEED_EXECUTION_LOG_REPOSITORY } from '../../domain/ports/seed-execution-log-repository.port';
import type { SeedExecutionLogRepositoryPort } from '../../domain/ports/seed-execution-log-repository.port';

@Injectable()
export class ListarSeedExecutionLogsUseCase {
  constructor(
    @Inject(SEED_EXECUTION_LOG_REPOSITORY)
    private readonly repo: SeedExecutionLogRepositoryPort,
  ) {}

  async execute(): Promise<SeedExecutionLog[]> {
    return this.repo.findAll();
  }
}
