import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { TIPO_SENSOR_REPOSITORY } from '../../domain/ports/tipo-sensor-repository.port';
import type { TipoSensorRepositoryPort } from '../../domain/ports/tipo-sensor-repository.port';
import { TipoSensor } from '../../domain/entities/tipo-sensor.entity';

@Injectable()
export class ObtenerTipoSensorUseCase {
  constructor(
    @Inject(TIPO_SENSOR_REPOSITORY)
    private readonly repo: TipoSensorRepositoryPort,
  ) {}

  async execute(id: number): Promise<TipoSensor> {
    const tipo = await this.repo.findById(id);
    if (!tipo) throw new NotFoundException(`Tipo de sensor con id ${id} no encontrado`);
    return tipo;
  }
}
