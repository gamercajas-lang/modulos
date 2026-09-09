import { Injectable, Inject, NotFoundException } from '@nestjs/common';

import type { MovimientoInsumoRepositoryPort } from '../../ports/output/movimiento-insumo.repository.port';

@Injectable()
export class DeleteMovimientoInsumoUseCase {
  constructor(
    @Inject('MovimientoInsumoRepositoryPort')
    private readonly movimientoInsumoRepository: MovimientoInsumoRepositoryPort,
  ) {}

  async execute(id: number): Promise<void> {
    const movimientoInsumo =
      await this.movimientoInsumoRepository.findById(id);

    if (!movimientoInsumo) {
      throw new NotFoundException('Movimiento Insumo no encontrado');
    }

    await this.movimientoInsumoRepository.delete(id);
  }
}