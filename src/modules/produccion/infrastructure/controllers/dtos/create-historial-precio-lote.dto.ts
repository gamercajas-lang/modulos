import { IsNumber, IsString, IsNotEmpty, IsOptional, IsDateString } from 'class-validator';

export class CreateHistorialPrecioLoteDto {
  @IsNumber()
  @IsNotEmpty()
  loteProduccionId: number;

  @IsNumber()
  @IsNotEmpty()
  precioAnterior: number;

  @IsNumber()
  @IsNotEmpty()
  precioNuevo: number;

  @IsNumber()
  @IsOptional()
  usuarioId?: number;

  @IsDateString()
  @IsNotEmpty()
  fecha: string;

  @IsString()
  @IsOptional()
  razon?: string;
}
