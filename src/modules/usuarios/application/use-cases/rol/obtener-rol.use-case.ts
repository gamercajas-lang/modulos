import { Inject, Injectable } from '@nestjs/common';
import { ROL_REPOSITORY, RolRepositoryPort } from '../../../ports/output/rol-repository.port';

@Injectable()
export class ObtenerRolUseCase {
  constructor(
    @Inject(ROL_REPOSITORY)
    private readonly repository: RolRepositoryPort,
  ) {}

  execute(id: number) {
    return this.repository.findById(id);
  }
}
