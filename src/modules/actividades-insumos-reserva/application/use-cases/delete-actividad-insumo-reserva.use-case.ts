import { Injectable, Inject, NotFoundException } from '@nestjs/common';

import type { ActividadInsumoReservaRepositoryPort } from '../../ports/output/actividad-insumo-reserva.repository.port';

@Injectable()
export class DeleteActividadInsumoReservaUseCase {
  constructor(
    @Inject('ActividadInsumoReservaRepositoryPort')
    private readonly actividadInsumoReservaRepository: ActividadInsumoReservaRepositoryPort,
  ) {}

  async execute(id: number): Promise<void> {
    const actividadInsumoReserva =
      await this.actividadInsumoReservaRepository.findById(id);

    if (!actividadInsumoReserva) {
      throw new NotFoundException(
        'Actividad Insumo Reserva no encontrada',
      );
    }

    await this.actividadInsumoReservaRepository.delete(id);
  }
}