import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { SensorAlerta } from '../../domain/entities/sensor-alerta.entity';
import { SENSOR_ALERTA_REPOSITORY } from '../../domain/ports/sensor-alerta-repository.port';
import type { SensorAlertaRepositoryPort } from '../../domain/ports/sensor-alerta-repository.port';
import { ActualizarSensorAlertaDto } from '../dto/actualizar-sensor-alerta.dto';

@Injectable()
export class ActualizarSensorAlertaUseCase {
  constructor(
    @Inject(SENSOR_ALERTA_REPOSITORY)
    private readonly repo: SensorAlertaRepositoryPort,
  ) {}

  async execute(id: number, dto: ActualizarSensorAlertaDto): Promise<SensorAlerta> {
    const actualizada = await this.repo.update(id, dto);
    if (!actualizada) throw new NotFoundException(`Alerta con id ${id} no encontrada`);
    return actualizada;
  }
}
