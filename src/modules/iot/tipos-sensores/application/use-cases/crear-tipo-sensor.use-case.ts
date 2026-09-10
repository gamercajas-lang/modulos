import { Inject, Injectable } from '@nestjs/common';
import { TipoSensor } from '../../domain/entities/tipo-sensor.entity';
import { TIPO_SENSOR_REPOSITORY } from '../../domain/ports/tipo-sensor-repository.port';
import type { TipoSensorRepositoryPort } from '../../domain/ports/tipo-sensor-repository.port';
import { CrearTipoSensorDto } from '../dto/crear-tipo-sensor.dto';

@Injectable()
export class CrearTipoSensorUseCase {
  constructor(
    @Inject(TIPO_SENSOR_REPOSITORY)
    private readonly repo: TipoSensorRepositoryPort,
  ) {}

  async execute(dto: CrearTipoSensorDto): Promise<TipoSensor> {
    const tipo = new TipoSensor(
      null,
      dto.nombre,
      dto.unidad,
      dto.decimales,
      dto.descripcion ?? null,
      dto.imagen ?? null,
      dto.ttlMinutos,
    );
    return this.repo.save(tipo);
  }
}
