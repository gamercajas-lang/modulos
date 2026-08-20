import { IsString, IsNumber, IsOptional, Min } from 'class-validator';

export class CrearTipoSensorDto {
  @IsString()
  nombre: string;

  @IsString()
  unidad: string;

  @IsNumber()
  @Min(0)
  decimales: number;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsString()
  imagen?: string;

  @IsNumber()
  @Min(1)
  ttlMinutos: number;
}
