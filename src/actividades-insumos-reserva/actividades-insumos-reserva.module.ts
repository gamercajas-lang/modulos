import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ActividadInsumoReserva } from './domain/entities/actividad-insumo-reserva.entity';

import { ActividadesInsumosReservaController } from './adapters/input/rest/actividades-insumos-reserva.controller';
import { ActividadesInsumosReservaRepository } from './adapters/output/persistence/actividades-insumos-reserva.repository';

import { ActividadInsumoReservaDomainService } from './domain/services/actividad-insumo-reserva-domain.service';

import { CreateActividadInsumoReservaUseCase } from './application/use-cases/create-actividad-insumo-reserva.use-case';
import { UpdateActividadInsumoReservaUseCase } from './application/use-cases/update-actividad-insumo-reserva.use-case';
import { DeleteActividadInsumoReservaUseCase } from './application/use-cases/delete-actividad-insumo-reserva.use-case';
import { FindAllActividadInsumoReservaUseCase } from './application/use-cases/find-all-actividad-insumo-reserva.use-case';
import { FindOneActividadInsumoReservaUseCase } from './application/use-cases/find-one-actividad-insumo-reserva.use-case';

@Module({
  imports: [
    TypeOrmModule.forFeature([ActividadInsumoReserva]),
  ],
  controllers: [
    ActividadesInsumosReservaController,
  ],
  providers: [
    ActividadInsumoReservaDomainService,

    {
      provide: 'ActividadInsumoReservaRepositoryPort',
      useClass: ActividadesInsumosReservaRepository,
    },

    CreateActividadInsumoReservaUseCase,
    UpdateActividadInsumoReservaUseCase,
    DeleteActividadInsumoReservaUseCase,
    FindAllActividadInsumoReservaUseCase,
    FindOneActividadInsumoReservaUseCase,
  ],
  exports: [
    {
      provide: 'ActividadInsumoReservaRepositoryPort',
      useClass: ActividadesInsumosReservaRepository,
    },
  ],
})
export class ActividadesInsumosReservaModule {}