import { Inject, Injectable } from '@nestjs/common';
import { SENSOR_REPOSITORY } from '../../domain/ports/sensor-repository.port';
import type { SensorRepositoryPort } from '../../domain/ports/sensor-repository.port';

@Injectable()
export class EliminarSensorUseCase {
  constructor(
    @Inject(SENSOR_REPOSITORY)
    private readonly repo: SensorRepositoryPort,
  ) {}

  async execute(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
