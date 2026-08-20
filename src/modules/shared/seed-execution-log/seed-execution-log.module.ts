import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedExecutionLogOrmEntity } from './infrastructure/persistence/seed-execution-log.orm-entity';
import { SeedExecutionLogTypeOrmRepository } from './infrastructure/persistence/seed-execution-log.repository';
import { SeedExecutionLogController } from './infrastructure/http/seed-execution-log.controller';
import { RegistrarSeedExecutionLogUseCase } from './application/use-cases/registrar-seed-execution-log.use-case';
import { ListarSeedExecutionLogsUseCase } from './application/use-cases/listar-seed-execution-logs.use-case';
import { SEED_EXECUTION_LOG_REPOSITORY } from './domain/ports/seed-execution-log-repository.port';

@Module({
  imports: [TypeOrmModule.forFeature([SeedExecutionLogOrmEntity])],
  controllers: [SeedExecutionLogController],
  providers: [
    RegistrarSeedExecutionLogUseCase,
    ListarSeedExecutionLogsUseCase,
    { provide: SEED_EXECUTION_LOG_REPOSITORY, useClass: SeedExecutionLogTypeOrmRepository },
  ],
})
export class SeedExecutionLogModule {}
