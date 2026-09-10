import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IotGlobalConfig } from '../../domain/entities/iot-global-config.entity';
import { IOT_GLOBAL_CONFIG_REPOSITORY } from '../../domain/ports/iot-global-config-repository.port';
import type { IotGlobalConfigRepositoryPort } from '../../domain/ports/iot-global-config-repository.port';

@Injectable()
export class ObtenerIotGlobalConfigUseCase {
  constructor(
    @Inject(IOT_GLOBAL_CONFIG_REPOSITORY)
    private readonly repo: IotGlobalConfigRepositoryPort,
  ) {}

  async execute(id: number): Promise<IotGlobalConfig> {
    const config = await this.repo.findById(id);
    if (!config) throw new NotFoundException(`Config con id ${id} no encontrada`);
    return config;
  }
}
