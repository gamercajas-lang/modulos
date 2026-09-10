import { Inject, Injectable } from '@nestjs/common';
import { Sensor } from '../../domain/entities/sensor.entity';
import { SENSOR_REPOSITORY } from '../../domain/ports/sensor-repository.port';
import type { SensorRepositoryPort } from '../../domain/ports/sensor-repository.port';
import { CrearSensorDto } from '../dto/crear-sensor.dto';

@Injectable()
export class CrearSensorUseCase {
  constructor(
    @Inject(SENSOR_REPOSITORY)
    private readonly repo: SensorRepositoryPort,
  ) {}

  async execute(dto: CrearSensorDto): Promise<Sensor> {
    const sensor = new Sensor(
      null,
      dto.nombreSensor,
      dto.tipoSensorId,
      dto.globalConfigId,
      dto.protocolo,
      dto.valorMinimoSensor,
      dto.valorMaximoSensor,
      dto.activo ?? true,
      'desconectado',
      null,
      null,
      null,
      dto.loteId ?? null,
      dto.subLoteId ?? null,
      dto.cultivoId ?? null,
    );
    return this.repo.save(sensor);
  }
}
