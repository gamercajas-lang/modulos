import { Injectable, Inject, NotFoundException } from '@nestjs/common';

import { ActividadInsumoReserva } from '../../domain/entities/actividad-insumo-reserva.entity';
import type { ActividadInsumoReservaRepositoryPort } from '../../ports/output/actividad-insumo-reserva.repository.port';

@Injectable()
export class FindOneActividadInsumoReservaUseCase {
  constructor(
    @Inject('ActividadInsumoReservaRepositoryPort')
    private readonly actividadInsumoReservaRepository: ActividadInsumoReservaRepositoryPort,
  ) {}

  async execute(id: number): Promise<ActividadInsumoReserva> {
    const actividadInsumoReserva =
      await this.actividadInsumoReservaRepository.findById(id);

    if (!actividadInsumoReserva) {
      throw new NotFoundException(
        'Actividad Insumo Reserva no encontrada',
      );
    }

    return actividadInsumoReserva;
  }
}