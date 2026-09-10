import { PartialType } from '@nestjs/mapped-types';
import { CrearSensorAlertaDto } from './crear-sensor-alerta.dto';

export class ActualizarSensorAlertaDto extends PartialType(CrearSensorAlertaDto) {}
