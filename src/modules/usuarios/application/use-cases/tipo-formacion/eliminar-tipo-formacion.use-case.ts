import { Inject, Injectable } from '@nestjs/common';
import { TIPO_FORMACION_REPOSITORY, TipoFormacionRepositoryPort } from '../../../ports/output/tipo-formacion-repository.port';

@Injectable()
export class EliminarTipoFormacionUseCase {
  constructor(
    @Inject(TIPO_FORMACION_REPOSITORY)
    private readonly repository: TipoFormacionRepositoryPort,
  ) {}

  execute(id: number) {
    return this.repository.remove(id);
  }
}
