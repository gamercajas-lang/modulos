import { IsString, IsOptional, IsNumber, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateLoteDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  nombre: string;

  @IsOptional()
  @IsString()
  geom?: string; // GeoJSON o WKT del polígono

  @IsOptional()
  @IsNumber()
  areaM2?: number;

  @IsOptional()
  @IsNumber()
  areaHa?: number;

  @IsOptional()
  @IsString()
  centroide?: string; // GeoJSON o WKT del punto central

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsString()
  estado?: string;
}
