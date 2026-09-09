import { Injectable, Inject, NotFoundException } from '@nestjs/common';

import type { ActividadInsumoUsoRepositoryPort } from '../../ports/output/actividad-insumo-uso.repository.port';

@Injectable()
export class DeleteActividadInsumoUsoUseCase {
  constructor(
    @Inject('ActividadInsumoUsoRepositoryPort')
    private readonly actividadInsumoUsoRepository: ActividadInsumoUsoRepositoryPort,
  ) {}

  async execute(id: number): Promise<void> {
    const actividadInsumoUso =
      await this.actividadInsumoUsoRepository.findById(id);

    if (!actividadInsumoUso) {
      throw new NotFoundException('Actividad Insumo Uso no encontrada');
    }

    await this.actividadInsumoUsoRepository.delete(id);
  }
}