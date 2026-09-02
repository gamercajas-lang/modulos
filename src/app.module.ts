import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeOrmConfig } from './config/typeorm.config';
import { TiposSensoresModule } from './modules/iot/tipos-sensores/tipos-sensores.module';
import { IotGlobalConfigModule } from './modules/iot/iot-global-config/iot-global-config.module';
import { SensoresModule } from './modules/iot/sensores/sensores.module';
import { SensorLecturasModule } from './modules/iot/sensor-lecturas/sensor-lecturas.module';
import { SensorAlertasModule } from './modules/iot/sensor-alertas/sensor-alertas.module';
import { SeedExecutionLogModule } from './modules/shared/seed-execution-log/seed-execution-log.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: getTypeOrmConfig,
    }),
    TiposSensoresModule,
    IotGlobalConfigModule,
    SensoresModule,
    SensorLecturasModule,
    SensorAlertasModule,
    SeedExecutionLogModule,
  ],
})
export class AppModule {}