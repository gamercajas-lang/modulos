import { Inject, Injectable } from '@nestjs/common';
import { SENSOR_LECTURA_REPOSITORY } from '../../domain/ports/sensor-lectura-repository.port';
import type { SensorLecturaRepositoryPort } from '../../domain/ports/sensor-lectura-repository.port';

@Injectable()
export class EliminarSensorLecturaUseCase {
  constructor(
    @Inject(SENSOR_LECTURA_REPOSITORY)
    private readonly repo: SensorLecturaRepositoryPort,
  ) {}

  async execute(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
