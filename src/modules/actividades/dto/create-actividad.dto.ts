import {
  IsEnum,
  IsString,
  IsOptional,
  IsUUID,
  IsDateString,
  IsNumber,
  IsArray,
  ValidateNested,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';
import { TipoActividad, EstadoActividad } from '../entities/actividad-tipo.enum';

export class InsumoUtilizadoDto {
  @IsUUID()
  insumoId: string;

  @IsNumber()
  @Min(0.01)
  cantidadUtilizada: number;

  @IsOptional()
  @IsString()
  unidadMedida?: string;
}

export class CreateActividadDto {
  @IsEnum(TipoActividad)
  tipo: TipoActividad;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsDateString()
  fecha: string;

  @IsUUID()
  loteId: string;

  @IsUUID()
  responsableId: string;

  @IsOptional()
  @IsEnum(EstadoActividad)
  estado?: EstadoActividad;

  @IsOptional()
  @IsNumber()
  @Min(0)
  costoManoObra?: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InsumoUtilizadoDto)
  insumosUtilizados?: InsumoUtilizadoDto[];
}
