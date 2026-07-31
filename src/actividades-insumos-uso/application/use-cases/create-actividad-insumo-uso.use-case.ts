import { Injectable, Inject } from '@nestjs/common';

import { CreateActividadInsumoUsoDto } from '../dto/create-actividad-insumo-uso.dto';
import { ActividadInsumoUso } from '../../domain/entities/actividad-insumo-uso.entity';
import { ActividadInsumoUsoDomainService } from '../../domain/services/actividad-insumo-uso-domain.service';
import type { ActividadInsumoUsoRepositoryPort } from '../../ports/output/actividad-insumo-uso.repository.port';

@Injectable()
export class CreateActividadInsumoUsoUseCase {
  constructor(
    @Inject('ActividadInsumoUsoRepositoryPort')
    private readonly actividadInsumoUsoRepository: ActividadInsumoUsoRepositoryPort,
    private readonly actividadInsumoUsoDomainService: ActividadInsumoUsoDomainService,
  ) {}

  async execute(
    createActividadInsumoUsoDto: CreateActividadInsumoUsoDto,
  ): Promise<ActividadInsumoUso> {
    const actividadInsumoUso = Object.assign(
      new ActividadInsumoUso(),
      createActividadInsumoUsoDto,
    );

    this.actividadInsumoUsoDomainService.validarCantidad(
      actividadInsumoUso,
    );

    return await this.actividadInsumoUsoRepository.create(
      actividadInsumoUso,
    );
  }
}