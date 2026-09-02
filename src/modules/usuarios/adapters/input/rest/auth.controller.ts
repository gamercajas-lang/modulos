import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { LoginUseCase } from '../../../application/use-cases/usuario/login.use-case';
import { LoginDto } from '../../../application/dto/usuario/login.dto';

// Endpoint publico: aqui es donde se genera el token, no se valida.
@Controller('auth')
export class AuthController {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() dto: LoginDto) {
    return this.loginUseCase.execute(dto);
  }
}
