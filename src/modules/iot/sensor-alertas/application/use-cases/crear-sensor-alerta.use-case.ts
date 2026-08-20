import { Inject, Injectable } from '@nestjs/common';
import { SensorAlerta } from '../../domain/entities/sensor-alerta.entity';
import { SENSOR_ALERTA_REPOSITORY } from '../../domain/ports/sensor-alerta-repository.port';
import type { SensorAlertaRepositoryPort } from '../../domain/ports/sensor-alerta-repository.port';
import { CrearSensorAlertaDto } from '../dto/crear-sensor-alerta.dto';

@Injectable()
export class CrearSensorAlertaUseCase {
  constructor(
    @Inject(SENSOR_ALERTA_REPOSITORY)
    private readonly repo: SensorAlertaRepositoryPort,
  ) {}

  async execute(dto: CrearSensorAlertaDto): Promise<SensorAlerta> {
    const alerta = new SensorAlerta(
      null,
      dto.sensorId,
      dto.loteId ?? null,
      dto.subLoteId ?? null,
      dto.tipo,
      dto.valor,
      dto.umbral,
      new Date(),
    );
    return this.repo.save(alerta);
  }
}
