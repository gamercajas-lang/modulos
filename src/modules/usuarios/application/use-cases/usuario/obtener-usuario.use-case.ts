import { Inject, Injectable } from '@nestjs/common';
import { USUARIO_REPOSITORY, UsuarioRepositoryPort } from '../../../ports/output/usuario-repository.port';

@Injectable()
export class ObtenerUsuarioUseCase {
  constructor(
    @Inject(USUARIO_REPOSITORY)
    private readonly repository: UsuarioRepositoryPort,
  ) {}

  execute(id: number) {
    return this.repository.findById(id);
  }
}
