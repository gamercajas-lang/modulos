import { Inject, Injectable } from '@nestjs/common';
import { PROGRAMA_FORMACION_REPOSITORY, ProgramaFormacionRepositoryPort } from '../../../ports/output/programa-formacion-repository.port';
import { CreateProgramaFormacionDto } from '../../dto/programa-formacion/create-programa-formacion.dto';

@Injectable()
export class CrearProgramaFormacionUseCase {
  constructor(
    @Inject(PROGRAMA_FORMACION_REPOSITORY)
    private readonly repository: ProgramaFormacionRepositoryPort,
  ) {}

  execute(dto: CreateProgramaFormacionDto) {
    const { fechaInicio, fechaFin, ...resto } = dto;
    return this.repository.create({
      ...resto,
      fechaInicio: fechaInicio ? new Date(fechaInicio) : undefined,
      fechaFin: fechaFin ? new Date(fechaFin) : undefined,
    });
  }
}
