import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';

import { ActividadInsumoUso } from './domain/entities/actividad-insumo-uso.entity';

import { ActividadesInsumosUsoController } from './adapters/input/rest/actividades-insumos-uso.controller';
import { ActividadesInsumosUsoRepository } from './adapters/output/persistence/actividades-insumos-uso.repository';

import { ActividadInsumoUsoDomainService } from './domain/services/actividad-insumo-uso-domain.service';

import { CreateActividadInsumoUsoUseCase } from './application/use-cases/create-actividad-insumo-uso.use-case';
import { UpdateActividadInsumoUsoUseCase } from './application/use-cases/update-actividad-insumo-uso.use-case';
import { DeleteActividadInsumoUsoUseCase } from './application/use-cases/delete-actividad-insumo-uso.use-case';
import { FindAllActividadInsumoUsoUseCase } from './application/use-cases/find-all-actividad-insumo-uso.use-case';
import { FindOneActividadInsumoUsoUseCase } from './application/use-cases/find-one-actividad-insumo-uso.use-case';

import { JwtStrategy } from '../../auth/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([ActividadInsumoUso]),
    PassportModule,
  ],
  controllers: [
    ActividadesInsumosUsoController,
  ],
  providers: [
    ActividadInsumoUsoDomainService,
    JwtStrategy,

    {
      provide: 'ActividadInsumoUsoRepositoryPort',
      useClass: ActividadesInsumosUsoRepository,
    },

    CreateActividadInsumoUsoUseCase,
    UpdateActividadInsumoUsoUseCase,
    DeleteActividadInsumoUsoUseCase,
    FindAllActividadInsumoUsoUseCase,
    FindOneActividadInsumoUsoUseCase,
  ],
  exports: [
    {
      provide: 'ActividadInsumoUsoRepositoryPort',
      useClass: ActividadesInsumosUsoRepository,
    },
  ],
})
export class ActividadesInsumosUsoModule {}