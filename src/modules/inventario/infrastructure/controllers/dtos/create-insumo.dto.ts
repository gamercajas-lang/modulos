import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsDateString,
  Min,
  MaxLength,
} from 'class-validator';

export class CreateInsumoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  nombre: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsString()
  @IsOptional()
  fotoUrl?: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  presentacionTipo?: string;

  @IsNumber()
  @IsOptional()
  @Min(0)
  presentacionCantidad?: number;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  presentacionUnidad?: string;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  unidadUso?: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  tipoMateria?: string;

  @IsNumber()
  @IsOptional()
  @Min(0)
  factorConversionUso?: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  stockPresentacion?: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  stockUso?: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  precioUnitarioPresentacion?: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  precioUnitarioUso?: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  valorInventario?: number;

  @IsNumber()
  @IsNotEmpty()
  almacenId: number;

  @IsNumber()
  @IsOptional()
  proveedorId?: number;

  @IsNumber()
  @IsNotEmpty()
  categoriaId: number;

  @IsDateString()
  @IsOptional()
  fechaRegistro?: string;

  @IsNumber()
  @IsOptional()
  creadoPorUsuarioId?: number;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  tipoInsumo?: string;

  @IsNumber()
  @IsOptional()
  @Min(0)
  costoAdquisicion?: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  valorResidual?: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  vidaUtilHoras?: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  horasUsadas?: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  stockReservado?: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  depreciacionAcumulada?: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  stockMinimo?: number;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  estado?: string;

  @IsNumber()
  @IsOptional()
  @Min(0)
  costoUnitario?: number;

  @IsDateString()
  @IsOptional()
  fechaAdquisicion?: string;

  @IsDateString()
  @IsOptional()
  fechaUltimoMantenimiento?: string;

  @IsDateString()
  @IsOptional()
  fechaBaja?: string;
}
