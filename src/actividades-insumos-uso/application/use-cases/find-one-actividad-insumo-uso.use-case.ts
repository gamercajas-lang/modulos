import { Injectable, Inject, NotFoundException } from '@nestjs/common';

import { ActividadInsumoUso } from '../../domain/entities/actividad-insumo-uso.entity';
import type { ActividadInsumoUsoRepositoryPort } from '../../ports/output/actividad-insumo-uso.repository.port';

@Injectable()
export class FindOneActividadInsumoUsoUseCase {
  constructor(
    @Inject('ActividadInsumoUsoRepositoryPort')
    private readonly actividadInsumoUsoRepository: ActividadInsumoUsoRepositoryPort,
  ) {}

  async execute(id: number): Promise<ActividadInsumoUso> {
    const actividadInsumoUso =
      await this.actividadInsumoUsoRepository.findById(id);

    if (!actividadInsumoUso) {
      throw new NotFoundException(
        'Actividad Insumo Uso no encontrada',
      );
    }

    return actividadInsumoUso;
  }
}