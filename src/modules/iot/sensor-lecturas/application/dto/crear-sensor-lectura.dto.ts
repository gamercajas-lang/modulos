import { IsNumber, IsOptional, IsDateString, IsString } from 'class-validator';

export class CrearSensorLecturaDto {
  @IsNumber()
  sensorId: number;

  @IsNumber()
  valor: number;

  @IsOptional()
  @IsDateString()
  fechaLectura?: string;

  @IsOptional()
  @IsString()
  unidad?: string;

  @IsOptional()
  @IsString()
  observaciones?: string;
}
