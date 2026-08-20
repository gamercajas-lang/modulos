import { Inject, Injectable } from '@nestjs/common';
import { SensorAlerta } from '../../domain/entities/sensor-alerta.entity';
import { SENSOR_ALERTA_REPOSITORY } from '../../domain/ports/sensor-alerta-repository.port';
import type { SensorAlertaRepositoryPort } from '../../domain/ports/sensor-alerta-repository.port';

@Injectable()
export class ListarSensorAlertasUseCase {
  constructor(
    @Inject(SENSOR_ALERTA_REPOSITORY)
    private readonly repo: SensorAlertaRepositoryPort,
  ) {}

  async execute(): Promise<SensorAlerta[]> {
    return this.repo.findAll();
  }
}
