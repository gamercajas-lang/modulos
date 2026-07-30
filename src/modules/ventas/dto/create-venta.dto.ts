import {
  IsString,
  IsOptional,
  IsUUID,
  IsDateString,
  IsNumber,
  IsArray,
  ValidateNested,
  IsEnum,
  Min,
  ArrayMinSize,
} from 'class-validator';
import { Type } from 'class-transformer';
import { MetodoPago } from '../entities/venta-enums';

export class DetalleVentaDto {
  @IsUUID()
  produccionId: string;

  @IsNumber()
  @Min(0.01)
  cantidad: number;

  @IsNumber()
  @Min(0)
  precioUnitario: number;
}

export class CreateVentaDto {
  @IsDateString()
  fecha: string;

  @IsString()
  clienteNombre: string;

  @IsOptional()
  @IsString()
  clienteDocumento?: string;

  @IsOptional()
  @IsString()
  clienteTelefono?: string;

  @IsUUID()
  vendedorId: string;

  @IsOptional()
  @IsEnum(MetodoPago)
  metodoPago?: MetodoPago;

  @IsOptional()
  @IsNumber()
  @Min(0)
  impuestos?: number;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => DetalleVentaDto)
  detalles: DetalleVentaDto[];
}
