import { PartialType } from '@nestjs/mapped-types';
import { CreateHistorialPrecioLoteDto } from './create-historial-precio-lote.dto';

export class UpdateHistorialPrecioLoteDto extends PartialType(CreateHistorialPrecioLoteDto) {}
