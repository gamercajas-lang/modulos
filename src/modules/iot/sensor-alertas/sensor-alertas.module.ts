import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensorAlertaOrmEntity } from './infrastructure/persistence/sensor-alerta.orm-entity';
import { SensorAlertaTypeOrmRepository } from './infrastructure/persistence/sensor-alerta.repository';
import { SensorAlertaController } from './infrastructure/http/sensor-alerta.controller';
import { CrearSensorAlertaUseCase } from './application/use-cases/crear-sensor-alerta.use-case';
import { ListarSensorAlertasUseCase } from './application/use-cases/listar-sensor-alertas.use-case';
import { ObtenerSensorAlertaUseCase } from './application/use-cases/obtener-sensor-alerta.use-case';
import { ActualizarSensorAlertaUseCase } from './application/use-cases/actualizar-sensor-alerta.use-case';
import { EliminarSensorAlertaUseCase } from './application/use-cases/eliminar-sensor-alerta.use-case';
import { SENSOR_ALERTA_REPOSITORY } from './domain/ports/sensor-alerta-repository.port';

@Module({
  imports: [TypeOrmModule.forFeature([SensorAlertaOrmEntity])],
  controllers: [SensorAlertaController],
  providers: [
    CrearSensorAlertaUseCase,
    ListarSensorAlertasUseCase,
    ObtenerSensorAlertaUseCase,
    ActualizarSensorAlertaUseCase,
    EliminarSensorAlertaUseCase,
    { provide: SENSOR_ALERTA_REPOSITORY, useClass: SensorAlertaTypeOrmRepository },
  ],
})
export class SensorAlertasModule {}
