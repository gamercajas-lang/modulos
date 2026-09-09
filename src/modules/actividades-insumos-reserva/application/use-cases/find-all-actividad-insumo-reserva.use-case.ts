import { Injectable, Inject } from '@nestjs/common';

import { ActividadInsumoReserva } from '../../domain/entities/actividad-insumo-reserva.entity';
import type { ActividadInsumoReservaRepositoryPort } from '../../ports/output/actividad-insumo-reserva.repository.port';

@Injectable()
export class FindAllActividadInsumoReservaUseCase {
  constructor(
    @Inject('ActividadInsumoReservaRepositoryPort')
    private readonly actividadInsumoReservaRepository: ActividadInsumoReservaRepositoryPort,
  ) {}

  async execute(): Promise<ActividadInsumoReserva[]> {
    return await this.actividadInsumoReservaRepository.findAll();
  }
}