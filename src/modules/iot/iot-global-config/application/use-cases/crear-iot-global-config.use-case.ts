import { Inject, Injectable } from '@nestjs/common';
import { IotGlobalConfig } from '../../domain/entities/iot-global-config.entity';
import { IOT_GLOBAL_CONFIG_REPOSITORY } from '../../domain/ports/iot-global-config-repository.port';
import type { IotGlobalConfigRepositoryPort } from '../../domain/ports/iot-global-config-repository.port';
import { CrearIotGlobalConfigDto } from '../dto/crear-iot-global-config.dto';

@Injectable()
export class CrearIotGlobalConfigUseCase {
  constructor(
    @Inject(IOT_GLOBAL_CONFIG_REPOSITORY)
    private readonly repo: IotGlobalConfigRepositoryPort,
  ) {}

  async execute(dto: CrearIotGlobalConfigDto): Promise<IotGlobalConfig> {
    const config = new IotGlobalConfig(
      null,
      dto.nombre,
      dto.agente,
      dto.puerto,
      dto.protocolo,
      dto.prefijoTema,
      dto.loteId ?? null,
      dto.subLoteId ?? null,
      dto.activo ?? true,
      dto.autoDiscover ?? false,
      false,
      dto.temasPredeterminados ?? null,
      dto.temasPersonalizados ?? null,
      dto.nombreUsuario ?? null,
      dto.contrasena ?? null,
    );
    return this.repo.save(config);
  }
}