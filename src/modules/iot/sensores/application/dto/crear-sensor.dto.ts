import { IsString, IsNumber, IsOptional, IsBoolean } from 'class-validator';

export class CrearSensorDto {
  @IsString()
  nombreSensor: string;

  @IsNumber()
  tipoSensorId: number;

  @IsNumber()
  globalConfigId: number;

  @IsString()
  protocolo: string;

  @IsOptional()
  @IsString()
  endpointUrl?: string;

  @IsOptional()
  @IsString()
  mqttTopic?: string;

  @IsNumber()
  valorMinimoSensor: number;

  @IsNumber()
  valorMaximoSensor: number;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;

  @IsOptional()
  @IsString()
  estado?: string;

  @IsOptional()
  @IsNumber()
  loteId?: number;

  @IsOptional()
  @IsNumber()
  subLoteId?: number;

  @IsOptional()
  @IsNumber()
  cultivoId?: number;

  @IsOptional()
  @IsNumber()
  creadoPorUsuarioId?: number;
}