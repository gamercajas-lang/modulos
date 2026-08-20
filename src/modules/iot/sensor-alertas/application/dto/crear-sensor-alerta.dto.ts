import { IsString, IsNumber, IsOptional, MaxLength } from 'class-validator';

export class CrearSensorAlertaDto {
  @IsNumber()
  sensorId: number;

  @IsOptional()
  @IsNumber()
  loteId?: number;

  @IsOptional()
  @IsNumber()
  subLoteId?: number;

  @IsString()
  @MaxLength(10)
  tipo: string;

  @IsNumber()
  valor: number;

  @IsNumber()
  umbral: number;
}
