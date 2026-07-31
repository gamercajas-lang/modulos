import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  apellido: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  identificacion: string;

  @IsOptional()
  @IsString()
  idFicha?: string;

  @IsOptional()
  @IsInt()
  programaFormacionId?: number;

  @IsOptional()
  @IsString()
  telefono?: string;

  @IsEmail()
  correo: string;

  // Contrasena en texto plano recibida por la API; el use-case la hashea con bcrypt
  // antes de persistir. Nunca se guarda ni se expone en texto plano.
  @IsString()
  @MinLength(8)
  @MaxLength(72)
  password: string;

  @IsOptional()
  @IsInt()
  rolId?: number;

  @IsOptional()
  @IsString()
  avatarUrl?: string;
}
