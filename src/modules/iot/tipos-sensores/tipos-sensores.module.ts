import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoSensorOrmEntity } from './infrastructure/persistence/tipo-sensor.orm-entity';
import { TipoSensorTypeOrmRepository } from './infrastructure/persistence/tipo-sensor.repository';
import { TipoSensorController } from './infrastructure/http/tipo-sensor.controller';
import { CrearTipoSensorUseCase } from './application/use-cases/crear-tipo-sensor.use-case';
import { ListarTiposSensoresUseCase } from './application/use-cases/listar-tipos-sensores.use-case';
import { ObtenerTipoSensorUseCase } from './application/use-cases/obtener-tipo-sensor.use-case';
import { ActualizarTipoSensorUseCase } from './application/use-cases/actualizar-tipo-sensor.use-case';
import { EliminarTipoSensorUseCase } from './application/use-cases/eliminar-tipo-sensor.use-case';
import { TIPO_SENSOR_REPOSITORY } from './domain/ports/tipo-sensor-repository.port';

@Module({
  imports: [TypeOrmModule.forFeature([TipoSensorOrmEntity])],
  controllers: [TipoSensorController],
  providers: [
    CrearTipoSensorUseCase,
    ListarTiposSensoresUseCase,
    ObtenerTipoSensorUseCase,
    ActualizarTipoSensorUseCase,
    EliminarTipoSensorUseCase,
    { provide: TIPO_SENSOR_REPOSITORY, useClass: TipoSensorTypeOrmRepository },
  ],
})
export class TiposSensoresModule {}
