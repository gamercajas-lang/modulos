import { Inject, Injectable } from '@nestjs/common';
import { TIPO_FORMACION_REPOSITORY, TipoFormacionRepositoryPort } from '../../../ports/output/tipo-formacion-repository.port';

@Injectable()
export class ListarTiposFormacionUseCase {
  constructor(
    @Inject(TIPO_FORMACION_REPOSITORY)
    private readonly repository: TipoFormacionRepositoryPort,
  ) {}

  execute() {
    return this.repository.findAll();
  }
}
