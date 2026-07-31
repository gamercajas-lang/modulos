import { Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { USUARIO_REPOSITORY, UsuarioRepositoryPort } from '../../../ports/output/usuario-repository.port';
import { UpdateUsuarioDto } from '../../dto/usuario/update-usuario.dto';

const SALT_ROUNDS = 10;

@Injectable()
export class ActualizarUsuarioUseCase {
  constructor(
    @Inject(USUARIO_REPOSITORY)
    private readonly repository: UsuarioRepositoryPort,
  ) {}

  async execute(id: number, dto: UpdateUsuarioDto) {
    const { password, ...resto } = dto;

    const data: Record<string, any> = { ...resto };
    if (password) {
      data.passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
    }

    return this.repository.update(id, data);
  }
}
