import { Inject, Injectable } from '@nestjs/common';
import { PERMISO_REPOSITORY, type PermisoRepositoryPort } from '../../../ports/output/permiso-repository.port';

@Injectable()
export class ListarPermisosUseCase {
  constructor(
    @Inject(PERMISO_REPOSITORY)
    private readonly repository: PermisoRepositoryPort,
  ) {}

  execute() {
    return this.repository.findAll();
  }
}
