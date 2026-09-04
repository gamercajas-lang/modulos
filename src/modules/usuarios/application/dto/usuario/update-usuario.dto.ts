import { OmitType, PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { CreateUsuarioDto } from './create-usuario.dto';

// password se excluye del update generico: la actualizacion de contrasena
// se maneja mejor con un endpoint/DTO dedicado (evita cambios accidentales).
export class UpdateUsuarioDto extends PartialType(
  OmitType(CreateUsuarioDto, ['password'] as const),
) {
  @IsOptional()
  @IsString()
  @MinLength(8)
  @MaxLength(72)
  password?: string;
}
