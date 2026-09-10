import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IotGlobalConfig } from '../../domain/entities/iot-global-config.entity';
import { IOT_GLOBAL_CONFIG_REPOSITORY } from '../../domain/ports/iot-global-config-repository.port';
import type { IotGlobalConfigRepositoryPort } from '../../domain/ports/iot-global-config-repository.port';
import { ActualizarIotGlobalConfigDto } from '../dto/actualizar-iot-global-config.dto';

@Injectable()
export class ActualizarIotGlobalConfigUseCase {
  constructor(
    @Inject(IOT_GLOBAL_CONFIG_REPOSITORY)
    private readonly repo: IotGlobalConfigRepositoryPort,
  ) {}

  async execute(id: number, dto: ActualizarIotGlobalConfigDto): Promise<IotGlobalConfig> {
    const actualizado = await this.repo.update(id, dto);
    if (!actualizado) throw new NotFoundException(`Config con id ${id} no encontrada`);
    return actualizado;
  }
}
