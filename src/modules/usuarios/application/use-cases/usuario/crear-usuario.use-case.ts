import { ConflictException, Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { USUARIO_REPOSITORY, UsuarioRepositoryPort } from '../../../ports/output/usuario-repository.port';
import { CreateUsuarioDto } from '../../dto/usuario/create-usuario.dto';

const SALT_ROUNDS = 10;

@Injectable()
export class CrearUsuarioUseCase {
  constructor(
    @Inject(USUARIO_REPOSITORY)
    private readonly repository: UsuarioRepositoryPort,
  ) {}

  async execute(dto: CreateUsuarioDto) {
    const existente = await this.repository.findByCorreo(dto.correo);
    if (existente) {
      throw new ConflictException('Ya existe un usuario registrado con ese correo');
    }

    const { password, ...resto } = dto;
    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

    return this.repository.create({ ...resto, passwordHash });
  }
}
