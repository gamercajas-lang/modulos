import { IsString, IsNumber, IsBoolean, IsOptional, IsIn, Min } from 'class-validator';

export class CrearIotGlobalConfigDto {
  @IsString()
  nombre: string;

  @IsString()
  agente: string;

  @IsNumber()
  @Min(1)
  puerto: number;

  @IsIn(['mqtt', 'mqtts', 'http', 'https'])
  protocolo: 'mqtt' | 'mqtts' | 'http' | 'https';

  @IsString()
  prefijoTema: string;

  @IsOptional()
  @IsString()
  temasPredeterminados?: string;

  @IsOptional()
  @IsString()
  temasPersonalizados?: string;

  @IsOptional()
  @IsNumber()
  loteId?: number;

  @IsOptional()
  @IsNumber()
  subLoteId?: number;

  @IsOptional()
  @IsString()
  nombreUsuario?: string;

  @IsOptional()
  @IsString()
  contrasena?: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;

  @IsOptional()
  @IsBoolean()
  autoDiscover?: boolean;
}
