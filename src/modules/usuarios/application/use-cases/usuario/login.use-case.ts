import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { USUARIO_REPOSITORY, UsuarioRepositoryPort } from '../../../ports/output/usuario-repository.port';
import { LoginDto } from '../../dto/usuario/login.dto';

@Injectable()
export class LoginUseCase {
  constructor(
    @Inject(USUARIO_REPOSITORY)
    private readonly repository: UsuarioRepositoryPort,
    private readonly jwtService: JwtService,
  ) {}

  async execute(dto: LoginDto): Promise<{ accessToken: string }> {
    const usuario = await this.repository.findByCorreo(dto.correo);
    if (!usuario) {
      throw new UnauthorizedException('Credenciales invalidas');
    }

    const passwordValida = await bcrypt.compare(dto.password, usuario.passwordHash);
    if (!passwordValida) {
      throw new UnauthorizedException('Credenciales invalidas');
    }

    if (!usuario.estaActivo()) {
      throw new UnauthorizedException('El usuario no esta activo');
    }

    const payload = { sub: usuario.id, email: usuario.correo, rol: usuario.rolId };
    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }
}
