import { Inject, Injectable } from '@nestjs/common';
import { PROGRAMA_FORMACION_REPOSITORY, ProgramaFormacionRepositoryPort } from '../../../ports/output/programa-formacion-repository.port';
import { UpdateProgramaFormacionDto } from '../../dto/programa-formacion/update-programa-formacion.dto';

@Injectable()
export class ActualizarProgramaFormacionUseCase {
  constructor(
    @Inject(PROGRAMA_FORMACION_REPOSITORY)
    private readonly repository: ProgramaFormacionRepositoryPort,
  ) {}

  execute(id: number, dto: UpdateProgramaFormacionDto) {
    const { fechaInicio, fechaFin, ...resto } = dto;
    return this.repository.update(id, {
      ...resto,
      ...(fechaInicio ? { fechaInicio: new Date(fechaInicio) } : {}),
      ...(fechaFin ? { fechaFin: new Date(fechaFin) } : {}),
    });
  }
}
