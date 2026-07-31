import { Inject, Injectable } from '@nestjs/common';
import { ROL_REPOSITORY, RolRepositoryPort } from '../../../ports/output/rol-repository.port';
import { UpdateRolDto } from '../../dto/rol/update-rol.dto';

@Injectable()
export class ActualizarRolUseCase {
  constructor(
    @Inject(ROL_REPOSITORY)
    private readonly repository: RolRepositoryPort,
  ) {}

  execute(id: number, dto: UpdateRolDto) {
    return this.repository.update(id, dto);
  }
}
