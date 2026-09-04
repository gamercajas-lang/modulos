import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

// Forma esperada del payload dentro del token JWT.
// Debe coincidir con lo que el modulo de usuarios (Persona 1) firme al hacer login.
export interface JwtPayload {
  sub: number; // id del usuario
  email?: string;
  rol?: string;
  [key: string]: unknown;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      // Debe ser EXACTAMENTE el mismo valor que JWT_SECRET en el modulo de usuarios,
      // para que un token emitido alla sea valido aqui.
      secretOrKey: process.env.JWT_SECRET ?? 'cambiar_este_secreto',
    });
  }

  // Lo que retorna aqui queda disponible como request.user en los controladores.
  validate(payload: JwtPayload): JwtPayload {
    return payload;
  }
}
