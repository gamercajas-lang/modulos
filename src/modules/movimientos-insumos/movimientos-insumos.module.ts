import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';

import { MovimientoInsumo } from './domain/entities/movimiento-insumo.entity';

import { MovimientosInsumosController } from './adapters/input/rest/movimientos-insumos.controller';
import { MovimientosInsumosRepository } from './adapters/output/persistence/movimientos-insumos.repository';

import { MovimientoInsumoDomainService } from './domain/services/movimiento-insumo-domain.service';

import { CreateMovimientoInsumoUseCase } from './application/use-cases/create-movimiento-insumo.use-case';
import { UpdateMovimientoInsumoUseCase } from './application/use-cases/update-movimiento-insumo.use-case';
import { DeleteMovimientoInsumoUseCase } from './application/use-cases/delete-movimiento-insumo.use-case';
import { FindAllMovimientoInsumoUseCase } from './application/use-cases/find-all-movimiento-insumo.use-case';
import { FindOneMovimientoInsumoUseCase } from './application/use-cases/find-one-movimiento-insumo.use-case';

import { JwtStrategy } from '../../auth/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([MovimientoInsumo]),
    PassportModule,
  ],
  controllers: [
    MovimientosInsumosController,
  ],
  providers: [
    {
      provide: 'MovimientoInsumoRepositoryPort',
      useClass: MovimientosInsumosRepository,
    },

    MovimientosInsumosRepository,
    MovimientoInsumoDomainService,
    JwtStrategy,

    CreateMovimientoInsumoUseCase,
    UpdateMovimientoInsumoUseCase,
    DeleteMovimientoInsumoUseCase,
    FindAllMovimientoInsumoUseCase,
    FindOneMovimientoInsumoUseCase,
  ],
  exports: [
    MovimientosInsumosRepository,
  ],
})
export class MovimientosInsumosModule {}