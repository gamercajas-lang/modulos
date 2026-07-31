import { Inject, Injectable } from '@nestjs/common';
import { ROL_REPOSITORY, RolRepositoryPort } from '../../../ports/output/rol-repository.port';

@Injectable()
export class ListarRolesUseCase {
  constructor(
    @Inject(ROL_REPOSITORY)
    private readonly repository: RolRepositoryPort,
  ) {}

  execute() {
    return this.repository.findAll();
  }
}
