import { IsString, IsNumber, IsDateString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateIncidenciaDto {

  @Type(() => Number)
  @IsNumber()
  id_cultivo_real!: number;

  @IsDateString()
  fecha!: string;

  @IsString()
  tipo_incidencia!: string;

  @IsString()
  gravedad!: string;

  @IsString()
  descripcion!: string;

  @Type(() => Number)
  @IsNumber()
  id_usuario_reporta!: number;

  @IsString()
  estado!: string;
}