import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensorOrmEntity } from './infrastructure/persistence/sensor.orm-entity';
import { SensorTypeOrmRepository } from './infrastructure/persistence/sensor.repository';
import { SensorController } from './infrastructure/http/sensor.controller';
import { CrearSensorUseCase } from './application/use-cases/crear-sensor.use-case';
import { ListarSensoresUseCase } from './application/use-cases/listar-sensores.use-case';
import { ObtenerSensorUseCase } from './application/use-cases/obtener-sensor.use-case';
import { ActualizarSensorUseCase } from './application/use-cases/actualizar-sensor.use-case';
import { EliminarSensorUseCase } from './application/use-cases/eliminar-sensor.use-case';
import { SENSOR_REPOSITORY } from './domain/ports/sensor-repository.port';

@Module({
  imports: [TypeOrmModule.forFeature([SensorOrmEntity])],
  controllers: [SensorController],
  providers: [
    CrearSensorUseCase,
    ListarSensoresUseCase,
    ObtenerSensorUseCase,
    ActualizarSensorUseCase,
    EliminarSensorUseCase,
    { provide: SENSOR_REPOSITORY, useClass: SensorTypeOrmRepository },
  ],
})
export class SensoresModule {}
