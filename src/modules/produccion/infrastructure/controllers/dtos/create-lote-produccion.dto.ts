import { IsNumber, IsString, IsNotEmpty, IsOptional } from 'class-validator';

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
  calidad?: string;

  @IsNumber()
  @IsOptional()
  cantidadKg?: number;

  @IsNumber()
  @IsOptional()
  stockDisponibleKg?: number;

  @IsNumber()
  @IsOptional()
  costoUnitarioKg?: number;

  @IsNumber()
  @IsOptional()
  costoTotal?: number;

  @IsNumber()
  @IsOptional()
  precioSugeridoKg?: number;
}
