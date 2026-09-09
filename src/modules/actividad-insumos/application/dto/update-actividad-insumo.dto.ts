import { PartialType } from '@nestjs/mapped-types';
import { CreateActividadInsumoDto } from './create-actividad-insumo.dto';

export class UpdateActividadInsumoDto extends PartialType(CreateActividadInsumoDto) {}