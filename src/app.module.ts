import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProveedoresModule } from './proveedores/proveedores.module';
import { MovimientosInsumosModule } from './movimientos-insumos/movimientos-insumos.module';
import { ReservasModule } from './reservas/reservas.module';
import { ActividadesInsumosReservaModule } from './actividades-insumos-reserva/actividades-insumos-reserva.module';
import { ActividadesInsumosUsoModule } from './actividades-insumos-uso/actividades-insumos-uso.module';
import { ActividadInsumosModule } from './actividad-insumos/actividad-insumos.module';
// NOTA: InsumosModule sigue sin importarse aquí a propósito — lo revisas tú primero.

import { Proveedor } from './proveedores/domain/entities/proveedor.entity';
import { ActividadInsumo } from './actividad-insumos/domain/entities/actividad-insumo.entity';
import { ActividadInsumoReserva } from './actividades-insumos-reserva/domain/entities/actividad-insumo-reserva.entity';
import { ActividadInsumoUso } from './actividades-insumos-uso/domain/entities/actividad-insumo-uso.entity';
import { MovimientoInsumo } from './movimientos-insumos/domain/entities/movimiento-insumo.entity';
import { Reserva } from './reservas/domain/entities/reserva.entity';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
// NOTA: Insumo tampoco está en este array, mismo motivo.

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // process.env.* disponible en toda la app, incluida JwtStrategy
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT ?? '5432', 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [
        Proveedor,
        ActividadInsumo,
        ActividadInsumoReserva,
        ActividadInsumoUso,
        MovimientoInsumo,
        Reserva,
      ],
      synchronize: false,
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