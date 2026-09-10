import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { TipoSensor } from '../../domain/entities/tipo-sensor.entity';
import { TIPO_SENSOR_REPOSITORY } from '../../domain/ports/tipo-sensor-repository.port';
import type { TipoSensorRepositoryPort } from '../../domain/ports/tipo-sensor-repository.port';
import { ActualizarTipoSensorDto } from '../dto/actualizar-tipo-sensor.dto';

@Injectable()
export class ActualizarTipoSensorUseCase {
  constructor(
    @Inject(TIPO_SENSOR_REPOSITORY)
    private readonly repo: TipoSensorRepositoryPort,
  ) {}

  async execute(id: number, dto: ActualizarTipoSensorDto): Promise<TipoSensor> {
    const actualizado = await this.repo.update(id, dto);
    if (!actualizado) throw new NotFoundException(`Tipo de sensor con id ${id} no encontrado`);
    return actualizado;
  }
}