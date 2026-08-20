import { IotGlobalConfig } from '../entities/iot-global-config.entity';

export interface IotGlobalConfigRepositoryPort {
  save(config: IotGlobalConfig): Promise<IotGlobalConfig>;
  findById(id: number): Promise<IotGlobalConfig | null>;
  findAll(): Promise<IotGlobalConfig[]>;
  update(id: number, config: Partial<IotGlobalConfig>): Promise<IotGlobalConfig | null>;
  delete(id: number): Promise<void>;
}

export const IOT_GLOBAL_CONFIG_REPOSITORY = Symbol('IOT_GLOBAL_CONFIG_REPOSITORY');
