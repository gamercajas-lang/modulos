import { Inject, Injectable } from '@nestjs/common';
import { TIPO_FORMACION_REPOSITORY, TipoFormacionRepositoryPort } from '../../../ports/output/tipo-formacion-repository.port';
import { UpdateTipoFormacionDto } from '../../dto/tipo-formacion/update-tipo-formacion.dto';

@Injectable()
export class ActualizarTipoFormacionUseCase {
  constructor(
    @Inject(TIPO_FORMACION_REPOSITORY)
    private readonly repository: TipoFormacionRepositoryPort,
  ) {}

  execute(id: number, dto: UpdateTipoFormacionDto) {
    return this.repository.update(id, dto);
  }
}
