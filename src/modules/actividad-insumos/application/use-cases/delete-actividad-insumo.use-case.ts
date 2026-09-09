import { Injectable, NotFoundException } from '@nestjs/common';

import { ActividadInsumoRepositoryPort } from '../../ports/output/actividad-insumo.repository.port';

@Injectable()
export class DeleteActividadInsumoUseCase {
  constructor(
    private readonly actividadInsumoRepository: ActividadInsumoRepositoryPort,
  ) {}

  async execute(id: number): Promise<void> {
    const actividadInsumo =
      await this.actividadInsumoRepository.findById(id);

    if (!actividadInsumo) {
      throw new NotFoundException('ActividadInsumo no encontrado');
    }

    await this.actividadInsumoRepository.delete(id);
  }
}