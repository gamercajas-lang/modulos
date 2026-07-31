import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ActividadInsumo } from './domain/entities/actividad-insumo.entity';

import { ActividadInsumosController } from './adapters/input/rest/actividad-insumos.controller';
import { ActividadInsumosRepository } from './adapters/output/persistence/actividad-insumos.repository';

import { ActividadInsumoDomainService } from './domain/services/actividad-insumo-domain.service';

import { CreateActividadInsumoUseCase } from './application/use-cases/create-actividad-insumo.use-case';
import { UpdateActividadInsumoUseCase } from './application/use-cases/update-actividad-insumo.use-case';
import { DeleteActividadInsumoUseCase } from './application/use-cases/delete-actividad-insumo.use-case';
import { FindAllActividadInsumoUseCase } from './application/use-cases/find-all-actividad-insumo.use-case';
import { FindOneActividadInsumoUseCase } from './application/use-cases/find-one-actividad-insumo.use-case';

import { ActividadInsumoRepositoryPort } from './ports/output/actividad-insumo.repository.port';

@Module({
  imports: [
    TypeOrmModule.forFeature([ActividadInsumo]),
  ],
  controllers: [
    ActividadInsumosController,
  ],
  providers: [
    {
      provide: ActividadInsumoRepositoryPort,
      useClass: ActividadInsumosRepository,
    },

    ActividadInsumoDomainService,

    CreateActividadInsumoUseCase,
    UpdateActividadInsumoUseCase,
    DeleteActividadInsumoUseCase,
    FindAllActividadInsumoUseCase,
    FindOneActividadInsumoUseCase,
  ],
  exports: [
    ActividadInsumoRepositoryPort,
  ],
})
export class ActividadInsumosModule {}