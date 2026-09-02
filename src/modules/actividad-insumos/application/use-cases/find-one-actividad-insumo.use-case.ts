import { Injectable, NotFoundException } from '@nestjs/common';

import { ActividadInsumo } from '../../domain/entities/actividad-insumo.entity';
import { ActividadInsumoRepositoryPort } from '../../ports/output/actividad-insumo.repository.port';

@Injectable()
export class FindOneActividadInsumoUseCase {
  constructor(
    private readonly actividadInsumoRepository: ActividadInsumoRepositoryPort,
  ) {}

  async execute(id: number): Promise<ActividadInsumo> {
    const actividadInsumo =
      await this.actividadInsumoRepository.findById(id);

    if (!actividadInsumo) {
      throw new NotFoundException('ActividadInsumo no encontrado');
    }

    return actividadInsumo;
  }
}