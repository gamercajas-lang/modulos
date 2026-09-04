import { Inject, Injectable } from '@nestjs/common';
import { PERMISO_REPOSITORY, PermisoRepositoryPort } from '../../../ports/output/permiso-repository.port';
import { CreatePermisoDto } from '../../dto/permiso/create-permiso.dto';

@Injectable()
export class CrearPermisoUseCase {
  constructor(
    @Inject(PERMISO_REPOSITORY)
    private readonly repository: PermisoRepositoryPort,
  ) {}

  execute(dto: CreatePermisoDto) {
    return this.repository.create(dto);
  }
}
