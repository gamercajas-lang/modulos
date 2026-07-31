import { Inject, Injectable } from '@nestjs/common';
import { USUARIO_REPOSITORY, UsuarioRepositoryPort } from '../../../ports/output/usuario-repository.port';

@Injectable()
export class ListarUsuariosUseCase {
  constructor(
    @Inject(USUARIO_REPOSITORY)
    private readonly repository: UsuarioRepositoryPort,
  ) {}

  execute() {
    return this.repository.findAll();
  }
}
