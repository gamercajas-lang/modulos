import { Inject, Injectable } from '@nestjs/common';
import { PROGRAMA_FORMACION_REPOSITORY, ProgramaFormacionRepositoryPort } from '../../../ports/output/programa-formacion-repository.port';

@Injectable()
export class ListarProgramasFormacionUseCase {
  constructor(
    @Inject(PROGRAMA_FORMACION_REPOSITORY)
    private readonly repository: ProgramaFormacionRepositoryPort,
  ) {}

  execute() {
    return this.repository.findAll();
  }
}
