import { Inject, Injectable } from '@nestjs/common';
import { PERMISO_REPOSITORY, PermisoRepositoryPort } from '../../../ports/output/permiso-repository.port';
import { UpdatePermisoDto } from '../../dto/permiso/update-permiso.dto';

@Injectable()
export class ActualizarPermisoUseCase {
  constructor(
    @Inject(PERMISO_REPOSITORY)
    private readonly repository: PermisoRepositoryPort,
  ) {}

  execute(id: number, dto: UpdatePermisoDto) {
    return this.repository.update(id, dto);
  }
}
