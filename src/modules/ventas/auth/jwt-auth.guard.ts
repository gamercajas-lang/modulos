import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// Uso: @UseGuards(JwtAuthGuard) arriba de un controlador o de un metodo.
// Si la peticion no trae "Authorization: Bearer <token>" valido, responde 401 automaticamente.
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
