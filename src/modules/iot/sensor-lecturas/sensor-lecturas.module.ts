import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensorLecturaOrmEntity } from './infrastructure/persistence/sensor-lectura.orm-entity';
import { SensorLecturaTypeOrmRepository } from './infrastructure/persistence/sensor-lectura.repository';
import { SensorLecturaController } from './infrastructure/http/sensor-lectura.controller';
import { CrearSensorLecturaUseCase } from './application/use-cases/crear-sensor-lectura.use-case';
import { ListarSensorLecturasUseCase } from './application/use-cases/listar-sensor-lecturas.use-case';
import { EliminarSensorLecturaUseCase } from './application/use-cases/eliminar-sensor-lectura.use-case';
import { SENSOR_LECTURA_REPOSITORY } from './domain/ports/sensor-lectura-repository.port';

@Module({
  imports: [TypeOrmModule.forFeature([SensorLecturaOrmEntity])],
  controllers: [SensorLecturaController],
  providers: [
    CrearSensorLecturaUseCase,
    ListarSensorLecturasUseCase,
    EliminarSensorLecturaUseCase,
    { provide: SENSOR_LECTURA_REPOSITORY, useClass: SensorLecturaTypeOrmRepository },
  ],
})
export class SensorLecturasModule {}
