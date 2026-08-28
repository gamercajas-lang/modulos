import { Injectable, Inject } from '@nestjs/common';

import { CreateActividadInsumoReservaDto } from '../dto/create-actividad-insumo-reserva.dto';
import { ActividadInsumoReserva } from '../../domain/entities/actividad-insumo-reserva.entity';
import type  { ActividadInsumoReservaRepositoryPort } from '../../ports/output/actividad-insumo-reserva.repository.port';
import { ActividadInsumoReservaDomainService } from '../../domain/services/actividad-insumo-reserva-domain.service';

@Injectable()
export class CreateActividadInsumoReservaUseCase {
  constructor(
    @Inject('ActividadInsumoReservaRepositoryPort')
    private readonly actividadInsumoReservaRepository: ActividadInsumoReservaRepositoryPort,
    private readonly actividadInsumoReservaDomainService: ActividadInsumoReservaDomainService,
  ) {}

  async execute(
    createActividadInsumoReservaDto: CreateActividadInsumoReservaDto,
  ): Promise<ActividadInsumoReserva> {
    const actividadInsumoReserva = Object.assign(
      new ActividadInsumoReserva(),
      createActividadInsumoReservaDto,
    );

    const actividadCreada =
      this.actividadInsumoReservaDomainService.create(
        actividadInsumoReserva,
      );

    return await this.actividadInsumoReservaRepository.create(
      actividadCreada,
    );
  }
}