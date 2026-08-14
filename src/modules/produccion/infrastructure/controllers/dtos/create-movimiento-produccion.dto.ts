import { IsNumber, IsString, IsNotEmpty, IsOptional, IsDateString, Min, MaxLength } from 'class-validator';

export class CreateMovimientoProduccionDto {
  @IsNumber()
  @IsNotEmpty()
  loteProduccionId: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  tipo: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  cantidadKg: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  costoUnitarioKg: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  costoTotal: number;

  @IsNumber()
  @IsOptional()
  ventaId?: number;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsNumber()
  @IsOptional()
  usuarioId?: number;

  @IsDateString()
  @IsNotEmpty()
  fecha: string;
}
