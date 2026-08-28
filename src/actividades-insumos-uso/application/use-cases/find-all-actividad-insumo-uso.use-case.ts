import { Injectable, Inject } from '@nestjs/common';

import { ActividadInsumoUso } from '../../domain/entities/actividad-insumo-uso.entity';
import type { ActividadInsumoUsoRepositoryPort } from '../../ports/output/actividad-insumo-uso.repository.port';

@Injectable()
export class FindAllActividadInsumoUsoUseCase {
  constructor(
    @Inject('ActividadInsumoUsoRepositoryPort')
    private readonly actividadInsumoUsoRepository: ActividadInsumoUsoRepositoryPort,
  ) {}

  async execute(): Promise<ActividadInsumoUso[]> {
    return await this.actividadInsumoUsoRepository.findAll();
  }
}