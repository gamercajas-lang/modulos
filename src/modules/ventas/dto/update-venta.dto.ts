import { PartialType, OmitType } from '@nestjs/mapped-types';
import { IsEnum, IsOptional } from 'class-validator';
import { CreateVentaDto } from './create-venta.dto';
import { EstadoVenta } from '../entities/venta-enums';

// No se permite editar los detalles de una venta ya creada por este endpoint;
// para eso se anula (estado = ANULADA) y se crea una nueva.
export class UpdateVentaDto extends PartialType(
  OmitType(CreateVentaDto, ['detalles'] as const),
) {
  @IsOptional()
  @IsEnum(EstadoVenta)
  estado?: EstadoVenta;
}
