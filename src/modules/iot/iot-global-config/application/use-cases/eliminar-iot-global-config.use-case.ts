import { Inject, Injectable } from '@nestjs/common';
import { IOT_GLOBAL_CONFIG_REPOSITORY } from '../../domain/ports/iot-global-config-repository.port';
import type { IotGlobalConfigRepositoryPort } from '../../domain/ports/iot-global-config-repository.port';

@Injectable()
export class EliminarIotGlobalConfigUseCase {
  constructor(
    @Inject(IOT_GLOBAL_CONFIG_REPOSITORY)
    private readonly repo: IotGlobalConfigRepositoryPort,
  ) {}

  async execute(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
