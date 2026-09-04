import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreatePermisoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  modulo: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  accion: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  clave: string;
}
