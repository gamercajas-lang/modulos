import { Injectable, Inject } from '@nestjs/common';

import { MovimientoInsumo } from '../../domain/entities/movimiento-insumo.entity';
import type { MovimientoInsumoRepositoryPort } from '../../ports/output/movimiento-insumo.repository.port';

@Injectable()
export class FindAllMovimientoInsumoUseCase {
  constructor(
    @Inject('MovimientoInsumoRepositoryPort')
    private readonly movimientoInsumoRepository: MovimientoInsumoRepositoryPort,
  ) {}

  async execute(): Promise<MovimientoInsumo[]> {
    return await this.movimientoInsumoRepository.findAll();
  }
}