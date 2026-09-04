import {
  IsString,
  IsOptional,
  IsInt,
  IsNotEmpty,
  IsArray,
} from 'class-validator';

export class CreateEpaDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  tipoEpa: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsString()
  sintomas?: string;

  @IsOptional()
  @IsString()
  manejoYControl?: string;

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  mesesProbables?: number[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  temporadas?: string[];

  @IsOptional()
  @IsString()
  notasEstacionalidad?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  fotosSintomas?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  fotosGenerales?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @IsOptional()
  @IsInt()
  creadoPorUsuarioId?: number;

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  tiposCultivosWikiIds?: number[];
}
