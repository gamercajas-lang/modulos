import { PartialType } from '@nestjs/mapped-types';
import { CrearSensorDto } from './crear-sensor.dto';

export class ActualizarSensorDto extends PartialType(CrearSensorDto) {}
