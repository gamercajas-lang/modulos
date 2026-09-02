import { Injectable, Inject, NotFoundException } from '@nestjs/common';

import { MovimientoInsumo } from '../../domain/entities/movimiento-insumo.entity';
import type { MovimientoInsumoRepositoryPort } from '../../ports/output/movimiento-insumo.repository.port';

@Injectable()
export class FindOneMovimientoInsumoUseCase {
  constructor(
    @Inject('MovimientoInsumoRepositoryPort')
    private readonly movimientoInsumoRepository: MovimientoInsumoRepositoryPort,
  ) {}

  async execute(id: number): Promise<MovimientoInsumo> {
    const movimientoInsumo =
      await this.movimientoInsumoRepository.findById(id);

    if (!movimientoInsumo) {
      throw new NotFoundException('Movimiento Insumo no encontrado');
    }

    return movimientoInsumo;
  }
}