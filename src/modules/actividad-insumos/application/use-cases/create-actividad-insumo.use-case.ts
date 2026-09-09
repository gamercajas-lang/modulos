import { Injectable } from '@nestjs/common';

import { CreateActividadInsumoDto } from '../dto/create-actividad-insumo.dto';
import { ActividadInsumo } from '../../domain/entities/actividad-insumo.entity';
import { ActividadInsumoDomainService } from '../../domain/services/actividad-insumo-domain.service';
import { ActividadInsumoRepositoryPort } from '../../ports/output/actividad-insumo.repository.port';

@Injectable()
export class CreateActividadInsumoUseCase {
  constructor(
    private readonly actividadInsumoRepository: ActividadInsumoRepositoryPort,
    private readonly actividadInsumoDomainService: ActividadInsumoDomainService,
  ) {}

  async execute(
    createActividadInsumoDto: CreateActividadInsumoDto,
  ): Promise<ActividadInsumo> {

    const actividadInsumo = Object.assign(
      new ActividadInsumo(),
      createActividadInsumoDto,
    );

    return await this.actividadInsumoRepository.create(actividadInsumo);
  }
}