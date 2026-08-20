import { Inject, Injectable } from '@nestjs/common';
import { SensorLectura } from '../../domain/entities/sensor-lectura.entity';
import { SENSOR_LECTURA_REPOSITORY } from '../../domain/ports/sensor-lectura-repository.port';
import type { SensorLecturaRepositoryPort } from '../../domain/ports/sensor-lectura-repository.port';

@Injectable()
export class ListarSensorLecturasUseCase {
  constructor(
    @Inject(SENSOR_LECTURA_REPOSITORY)
    private readonly repo: SensorLecturaRepositoryPort,
  ) {}

  async execute(): Promise<SensorLectura[]> {
    return this.repo.findAll();
  }
}
