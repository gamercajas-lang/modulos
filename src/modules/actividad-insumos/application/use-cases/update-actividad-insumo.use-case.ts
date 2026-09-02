import { Injectable, NotFoundException } from '@nestjs/common';

import { UpdateActividadInsumoDto } from '../dto/update-actividad-insumo.dto';
import { ActividadInsumo } from '../../domain/entities/actividad-insumo.entity';
import { ActividadInsumoRepositoryPort } from '../../ports/output/actividad-insumo.repository.port';
import { ActividadInsumoDomainService } from '../../domain/services/actividad-insumo-domain.service';

@Injectable()
export class UpdateActividadInsumoUseCase {
  constructor(
    private readonly actividadInsumoRepository: ActividadInsumoRepositoryPort,
    private readonly actividadInsumoDomainService: ActividadInsumoDomainService,
  ) {}

  async execute(
    id: number,
    updateActividadInsumoDto: UpdateActividadInsumoDto,
  ): Promise<ActividadInsumo> {
    const actividadInsumo =
      await this.actividadInsumoRepository.findById(id);

    if (!actividadInsumo) {
      throw new NotFoundException('ActividadInsumo no encontrado');
    }

    return await this.actividadInsumoRepository.update(
      id,
      updateActividadInsumoDto,
    );
  }
}