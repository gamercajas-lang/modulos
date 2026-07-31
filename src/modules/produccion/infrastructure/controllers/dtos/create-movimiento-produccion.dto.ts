import { IsNumber, IsString, IsNotEmpty, IsOptional, IsDateString } from 'class-validator';

export class CreateMovimientoProduccionDto {
  @IsNumber()
  @IsNotEmpty()
  loteProduccionId: number;

  @IsString()
  @IsNotEmpty()
  tipo: string;

  @IsNumber()
  @IsNotEmpty()
  cantidadKg: number;

  @IsNumber()
  @IsNotEmpty()
  costoUnitarioKg: number;

  @IsNumber()
  @IsNotEmpty()
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
