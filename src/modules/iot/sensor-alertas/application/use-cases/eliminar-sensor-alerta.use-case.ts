import { Inject, Injectable } from '@nestjs/common';
import { SENSOR_ALERTA_REPOSITORY } from '../../domain/ports/sensor-alerta-repository.port';
import type { SensorAlertaRepositoryPort } from '../../domain/ports/sensor-alerta-repository.port';

@Injectable()
export class EliminarSensorAlertaUseCase {
  constructor(
    @Inject(SENSOR_ALERTA_REPOSITORY)
    private readonly repo: SensorAlertaRepositoryPort,
  ) {}

  async execute(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
