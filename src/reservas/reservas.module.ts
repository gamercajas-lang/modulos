import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Reserva } from './domain/entities/reserva.entity';

import { ReservasController } from './adapters/input/rest/reservas.controller';
import { ReservasRepository } from './adapters/output/persistence/reservas.repository';

import { ReservaDomainService } from './domain/services/reserva-domain.service';

import { CreateReservaUseCase } from './application/use-cases/create-reserva.use-case';
import { UpdateReservaUseCase } from './application/use-cases/update-reserva.use-case';
import { DeleteReservaUseCase } from './application/use-cases/delete-reserva.use-case';
import { FindAllReservaUseCase } from './application/use-cases/find-all-reserva.use-case';
import { FindOneReservaUseCase } from './application/use-cases/find-one-reserva.use-case';

@Module({
  imports: [
    TypeOrmModule.forFeature([Reserva]),
  ],
  controllers: [
    ReservasController,
  ],
  providers: [
    {
      provide: 'ReservaRepositoryPort',
      useClass: ReservasRepository,
    },

    ReservasRepository,
    ReservaDomainService,

    CreateReservaUseCase,
    UpdateReservaUseCase,
    DeleteReservaUseCase,
    FindAllReservaUseCase,
    FindOneReservaUseCase,
  ],
  exports: [
    ReservasRepository,
  ],
})
export class ReservasModule {}