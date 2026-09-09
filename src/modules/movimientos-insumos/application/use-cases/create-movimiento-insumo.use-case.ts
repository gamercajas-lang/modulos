import { Injectable, Inject } from '@nestjs/common';

import { CreateMovimientoInsumoDto } from '../dto/create-movimiento-insumo.dto';
import { MovimientoInsumo } from '../../domain/entities/movimiento-insumo.entity';
import { MovimientoInsumoDomainService } from '../../domain/services/movimiento-insumo-domain.service';
import type { MovimientoInsumoRepositoryPort } from '../../ports/output/movimiento-insumo.repository.port';

@Injectable()
export class CreateMovimientoInsumoUseCase {
  constructor(
    @Inject('MovimientoInsumoRepositoryPort')
    private readonly movimientoInsumoRepository: MovimientoInsumoRepositoryPort,
    private readonly movimientoInsumoDomainService: MovimientoInsumoDomainService,
  ) {}

  async execute(
    createMovimientoInsumoDto: CreateMovimientoInsumoDto,
  ): Promise<MovimientoInsumo> {
    const movimientoInsumo = Object.assign(
      new MovimientoInsumo(),
      createMovimientoInsumoDto,
    );

    this.movimientoInsumoDomainService.validarCantidad(
      movimientoInsumo,
    );

    return await this.movimientoInsumoRepository.create(
      movimientoInsumo,
    );
  }
}