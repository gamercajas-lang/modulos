import { Inject, Injectable } from '@nestjs/common';
import { ROL_REPOSITORY, RolRepositoryPort } from '../../../ports/output/rol-repository.port';
import { CreateRolDto } from '../../dto/rol/create-rol.dto';

@Injectable()
export class CrearRolUseCase {
  constructor(
    @Inject(ROL_REPOSITORY)
    private readonly repository: RolRepositoryPort,
  ) {}

  execute(dto: CreateRolDto) {
    return this.repository.create(dto);
  }
}
