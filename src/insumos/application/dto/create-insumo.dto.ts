import {
  IsIn,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateInsumoDto {
  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsString()
  @IsOptional()
  fotoUrl?: string;

  @IsString()
  @IsOptional()
  presentacionTipo?: string;

  @IsNumber()
  @IsOptional()
  presentacionCantidad?: number;

  @IsString()
  @IsOptional()
  presentacionUnidad?: string;

  @IsString()
  @IsOptional()
  unidadUso?: string;

  @IsString()
  @IsOptional()
  tipoMateria?: string;

  @IsNumber()
  @IsOptional()
  factorConversionUso?: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  stockPresentacion?: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  precioUnitarioPresentacion?: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  precioUnitarioUso?: number;

  @IsInt()
  @IsOptional()
  almacenId?: number;

  @IsInt()
  @IsOptional()
  proveedorId?: number;

  @IsInt()
  @IsOptional()
  categoriaId?: number;

  @IsInt()
  @IsNotEmpty()
  creadoPorUsuarioId!: number;

  // ASUNCIÓN: ajustar estos valores a los que definan realmente para insumos_tipoinsumo_enum.
  @IsIn(['CONSUMIBLE', 'HERRAMIENTA', 'ACTIVO_FIJO'])
  tipoInsumo!: string;

  @IsNumber()
  @IsOptional()
  costoAdquisicion?: number;

  @IsNumber()
  @IsOptional()
  valorResidual?: number;

  @IsNumber()
  @IsOptional()
  vidaUtilHoras?: number;

  @IsInt()
  @Min(0)
  @IsOptional()
  stockMinimo?: number;

  // ASUNCIÓN: ajustar a los valores reales de insumos_estado_enum.
  @IsIn(['ACTIVO', 'INACTIVO', 'DE_BAJA'])
  @IsOptional()
  estado?: string;

  @IsNumber()
  @IsOptional()
  costoUnitario?: number;
}
