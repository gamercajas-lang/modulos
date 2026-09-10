import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IotGlobalConfigOrmEntity } from './infrastructure/persistence/iot-global-config.orm-entity';
import { IotGlobalConfigTypeOrmRepository } from './infrastructure/persistence/iot-global-config.repository';
import { IotGlobalConfigController } from './infrastructure/http/iot-global-config.controller';
import { CrearIotGlobalConfigUseCase } from './application/use-cases/crear-iot-global-config.use-case';
import { ListarIotGlobalConfigUseCase } from './application/use-cases/listar-iot-global-config.use-case';
import { ObtenerIotGlobalConfigUseCase } from './application/use-cases/obtener-iot-global-config.use-case';
import { ActualizarIotGlobalConfigUseCase } from './application/use-cases/actualizar-iot-global-config.use-case';
import { EliminarIotGlobalConfigUseCase } from './application/use-cases/eliminar-iot-global-config.use-case';
import { IOT_GLOBAL_CONFIG_REPOSITORY } from './domain/ports/iot-global-config-repository.port';

@Module({
  imports: [TypeOrmModule.forFeature([IotGlobalConfigOrmEntity])],
  controllers: [IotGlobalConfigController],
  providers: [
    CrearIotGlobalConfigUseCase,
    ListarIotGlobalConfigUseCase,
    ObtenerIotGlobalConfigUseCase,
    ActualizarIotGlobalConfigUseCase,
    EliminarIotGlobalConfigUseCase,
    { provide: IOT_GLOBAL_CONFIG_REPOSITORY, useClass: IotGlobalConfigTypeOrmRepository },
  ],
})
export class IotGlobalConfigModule {}
