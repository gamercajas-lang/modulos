import { Inject, Injectable } from '@nestjs/common';
import { TIPO_FORMACION_REPOSITORY, TipoFormacionRepositoryPort } from '../../../ports/output/tipo-formacion-repository.port';
import { CreateTipoFormacionDto } from '../../dto/tipo-formacion/create-tipo-formacion.dto';

@Injectable()
export class CrearTipoFormacionUseCase {
  constructor(
    @Inject(TIPO_FORMACION_REPOSITORY)
    private readonly repository: TipoFormacionRepositoryPort,
  ) {}

  execute(dto: CreateTipoFormacionDto) {
    return this.repository.create(dto);
  }
}
