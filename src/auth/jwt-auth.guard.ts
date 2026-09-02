import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// Uso: @UseGuards(JwtAuthGuard) en cualquier endpoint que requiera
// un token válido emitido por POST /auth/login.
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
