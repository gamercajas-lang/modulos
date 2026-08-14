import { IsNumber, IsString, IsNotEmpty, IsOptional, IsDateString, Min, MaxLength } from 'class-validator';

export class CreateHistorialPrecioLoteDto {
  @IsNumber()
  @IsNotEmpty()
  loteProduccionId: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  precioAnterior: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  precioNuevo: number;

  @IsNumber()
  @IsOptional()
  usuarioId?: number;

  @IsDateString()
  @IsNotEmpty()
  fecha: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  razon?: string;
}
