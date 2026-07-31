import { Injectable } from '@nestjs/common';

import { ActividadInsumo } from '../../domain/entities/actividad-insumo.entity';
import { ActividadInsumoRepositoryPort } from '../../ports/output/actividad-insumo.repository.port';

@Injectable()
export class FindAllActividadInsumoUseCase {
  constructor(
    private readonly actividadInsumoRepository: ActividadInsumoRepositoryPort,
  ) {}

  async execute(): Promise<ActividadInsumo[]> {
    return await this.actividadInsumoRepository.findAll();
  }
}
