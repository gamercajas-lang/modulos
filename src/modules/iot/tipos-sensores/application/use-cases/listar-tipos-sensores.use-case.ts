import { Inject, Injectable } from '@nestjs/common';
import { TipoSensor } from '../../domain/entities/tipo-sensor.entity';
import { TIPO_SENSOR_REPOSITORY } from '../../domain/ports/tipo-sensor-repository.port';
import type { TipoSensorRepositoryPort } from '../../domain/ports/tipo-sensor-repository.port';

@Injectable()
export class ListarTiposSensoresUseCase {
  constructor(
    @Inject(TIPO_SENSOR_REPOSITORY)
    private readonly repo: TipoSensorRepositoryPort,
  ) {}

  async execute(): Promise<TipoSensor[]> {
    return this.repo.findAll();
  }
}
