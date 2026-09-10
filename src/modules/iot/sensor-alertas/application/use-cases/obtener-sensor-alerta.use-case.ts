import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { SensorAlerta } from '../../domain/entities/sensor-alerta.entity';
import { SENSOR_ALERTA_REPOSITORY } from '../../domain/ports/sensor-alerta-repository.port';
import type { SensorAlertaRepositoryPort } from '../../domain/ports/sensor-alerta-repository.port';

@Injectable()
export class ObtenerSensorAlertaUseCase {
  constructor(
    @Inject(SENSOR_ALERTA_REPOSITORY)
    private readonly repo: SensorAlertaRepositoryPort,
  ) {}

  async execute(id: number): Promise<SensorAlerta> {
    const alerta = await this.repo.findById(id);
    if (!alerta) throw new NotFoundException(`Alerta con id ${id} no encontrada`);
    return alerta;
  }
}
