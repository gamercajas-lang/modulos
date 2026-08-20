import { Inject, Injectable } from '@nestjs/common';
import { Sensor } from '../../domain/entities/sensor.entity';
import { SENSOR_REPOSITORY } from '../../domain/ports/sensor-repository.port';
import type { SensorRepositoryPort } from '../../domain/ports/sensor-repository.port';

@Injectable()
export class ListarSensoresUseCase {
  constructor(
    @Inject(SENSOR_REPOSITORY)
    private readonly repo: SensorRepositoryPort,
  ) {}

  async execute(): Promise<Sensor[]> {
    return this.repo.findAll();
  }
}
