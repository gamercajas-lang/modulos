import { IsString, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

export class CreateAlmacenDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  nombre: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  ubicacion?: string;
}
