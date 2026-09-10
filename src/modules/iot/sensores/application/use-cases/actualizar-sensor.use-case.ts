import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Sensor } from '../../domain/entities/sensor.entity';
import { SENSOR_REPOSITORY } from '../../domain/ports/sensor-repository.port';
import type { SensorRepositoryPort } from '../../domain/ports/sensor-repository.port';
import { ActualizarSensorDto } from '../dto/actualizar-sensor.dto';

@Injectable()
export class ActualizarSensorUseCase {
  constructor(
    @Inject(SENSOR_REPOSITORY)
    private readonly repo: SensorRepositoryPort,
  ) {}

  async execute(id: number, dto: ActualizarSensorDto): Promise<Sensor> {
    const actualizado = await this.repo.update(id, dto);
    if (!actualizado) throw new NotFoundException(`Sensor con id ${id} no encontrado`);
    return actualizado;
  }
}
