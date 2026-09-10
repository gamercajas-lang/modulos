import { Inject, Injectable } from '@nestjs/common';
import { TIPO_SENSOR_REPOSITORY } from '../../domain/ports/tipo-sensor-repository.port';
import type { TipoSensorRepositoryPort } from '../../domain/ports/tipo-sensor-repository.port';

@Injectable()
export class EliminarTipoSensorUseCase {
  constructor(
    @Inject(TIPO_SENSOR_REPOSITORY)
    private readonly repo: TipoSensorRepositoryPort,
  ) {}

  async execute(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}