import { Inject, Injectable } from '@nestjs/common';
import { IotGlobalConfig } from '../../domain/entities/iot-global-config.entity';
import { IOT_GLOBAL_CONFIG_REPOSITORY } from '../../domain/ports/iot-global-config-repository.port';
import type { IotGlobalConfigRepositoryPort } from '../../domain/ports/iot-global-config-repository.port';

@Injectable()
export class ListarIotGlobalConfigUseCase {
  constructor(
    @Inject(IOT_GLOBAL_CONFIG_REPOSITORY)
    private readonly repo: IotGlobalConfigRepositoryPort,
  ) {}

  async execute(): Promise<IotGlobalConfig[]> {
    return this.repo.findAll();
  }
}
