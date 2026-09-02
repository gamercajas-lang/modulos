import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProveedoresModule } from './modules/proveedores/proveedores.module';
import { MovimientosInsumosModule } from './modules/movimientos-insumos/movimientos-insumos.module';
import { ReservasModule } from './modules/reservas/reservas.module';
import { ActividadesInsumosReservaModule } from './modules/actividades-insumos-reserva/actividades-insumos-reserva.module';
import { ActividadesInsumosUsoModule } from './modules/actividades-insumos-uso/actividades-insumos-uso.module';
import { ActividadInsumosModule } from './modules/actividad-insumos/actividad-insumos.module';
// NOTA: el módulo de insumos (tabla `insumos`) es responsabilidad de Michael (P3);
// el duplicado que vivía en esta rama (src/insumos) fue eliminado.

import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // process.env.* disponible en toda la app, incluida JwtStrategy
    }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST'),
        port: parseInt(config.get<string>('DB_PORT') ?? '5432', 10),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_NAME'),
        autoLoadEntities: true, // cada módulo registra sus entidades vía TypeOrmModule.forFeature
        synchronize: false,
      }),
    }),

    ProveedoresModule,
    MovimientosInsumosModule,
    ReservasModule,
    ActividadesInsumosReservaModule,
    ActividadesInsumosUsoModule,
    ActividadInsumosModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
