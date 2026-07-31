import { PartialType } from '@nestjs/mapped-types';
import { CreateMovimientoProduccionDto } from './create-movimiento-produccion.dto';

export class UpdateMovimientoProduccionDto extends PartialType(CreateMovimientoProduccionDto) {}
