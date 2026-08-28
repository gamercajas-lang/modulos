import { IsInt, IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class CreateActividadInsumoDto {

  @IsInt()
  actividad_id!: number;

  @IsInt()
  insumo_id!: number;

  @IsNumber()
  cantidad_usada!: number;

  @IsString()
  @IsNotEmpty()
  unidad!: string;

  @IsNumber()
  costo_unitario!: number;

  @IsNumber()
  costo_total!: number;

}