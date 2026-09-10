import { Inject, Injectable } from '@nestjs/common';
import { SeedExecutionLog } from '../../domain/entities/seed-execution-log.entity';
import { SEED_EXECUTION_LOG_REPOSITORY } from '../../domain/ports/seed-execution-log-repository.port';
import type { SeedExecutionLogRepositoryPort } from '../../domain/ports/seed-execution-log-repository.port';
import { CrearSeedExecutionLogDto } from '../dto/crear-seed-execution-log.dto';

@Injectable()
export class RegistrarSeedExecutionLogUseCase {
  constructor(
    @Inject(SEED_EXECUTION_LOG_REPOSITORY)
    private readonly repo: SeedExecutionLogRepositoryPort,
  ) {}

  async execute(dto: CrearSeedExecutionLogDto): Promise<SeedExecutionLog> {
    const yaEjecutado = await this.repo.findBySeedName(dto.seedName);
    if (yaEjecutado) return yaEjecutado;

    const log = new SeedExecutionLog(null, dto.seedName, new Date(), dto.description ?? null);
    return this.repo.save(log);
  }
}
