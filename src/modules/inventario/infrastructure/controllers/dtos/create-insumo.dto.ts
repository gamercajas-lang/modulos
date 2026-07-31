import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsDateString,
} from 'class-validator';

export class CreateInsumoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

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
  @IsOptional()
  stockPresentacion?: number;

  @IsNumber()
  @IsOptional()
  stockUso?: number;

  @IsNumber()
  @IsOptional()
  precioUnitarioPresentacion?: number;

  @IsNumber()
  @IsOptional()
  precioUnitarioUso?: number;

  @IsNumber()
  @IsOptional()
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
  tipoInsumo?: string;

  @IsNumber()
  @IsOptional()
  costoAdquisicion?: number;

  @IsNumber()
  @IsOptional()
  valorResidual?: number;

  @IsNumber()
  @IsOptional()
  vidaUtilHoras?: number;

  @IsNumber()
  @IsOptional()
  horasUsadas?: number;

  @IsNumber()
  @IsOptional()
  stockReservado?: number;

  @IsNumber()
  @IsOptional()
  depreciacionAcumulada?: number;

  @IsNumber()
  @IsOptional()
  stockMinimo?: number;

  @IsString()
  @IsOptional()
  estado?: string;

  @IsNumber()
  @IsOptional()
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
