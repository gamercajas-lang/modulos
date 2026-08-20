import { Inject, Injectable } from '@nestjs/common';
import { SensorLectura } from '../../domain/entities/sensor-lectura.entity';
import { SENSOR_LECTURA_REPOSITORY } from '../../domain/ports/sensor-lectura-repository.port';
import type { SensorLecturaRepositoryPort } from '../../domain/ports/sensor-lectura-repository.port';
import { CrearSensorLecturaDto } from '../dto/crear-sensor-lectura.dto';

@Injectable()
export class CrearSensorLecturaUseCase {
  constructor(
    @Inject(SENSOR_LECTURA_REPOSITORY)
    private readonly repo: SensorLecturaRepositoryPort,
  ) {}

  async execute(dto: CrearSensorLecturaDto): Promise<SensorLectura> {
    const lectura = new SensorLectura(
      null,
      dto.sensorId,
      dto.valor,
      dto.fechaLectura ? new Date(dto.fechaLectura) : new Date(),
      dto.unidad ?? null,
      dto.observaciones ?? null,
    );
    return this.repo.save(lectura);
  }
}