import { IsNumber, IsString, IsNotEmpty, IsOptional, Min, MaxLength } from 'class-validator';

export class CreateLoteProduccionDto {
  @IsNumber()
  @IsNotEmpty()
  productoAgroId: number;

  @IsNumber()
  @IsOptional()
  cultivoId?: number;

  @IsNumber()
  @IsOptional()
  loteId?: number;

  @IsNumber()
  @IsOptional()
  subLoteId?: number;

  @IsNumber()
  @IsOptional()
  actividadCosechaId?: number;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  calidad?: string;

  @IsNumber()
  @IsOptional()
  @Min(0)
  cantidadKg?: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  stockDisponibleKg?: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  costoUnitarioKg?: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  costoTotal?: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  precioSugeridoKg?: number;
}
