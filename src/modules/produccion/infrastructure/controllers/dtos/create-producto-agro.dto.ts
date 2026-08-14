import { IsString, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

export class CreateProductoAgroDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  unidadBase: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsString()
  @IsOptional()
  imagen?: string;
}
