import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProveedoresModule } from './proveedores/proveedores.module';
import { MovimientosInsumosModule } from './movimientos-insumos/movimientos-insumos.module';
import { ReservasModule } from './reservas/reservas.module';
import { ActividadesInsumosReservaModule } from './actividades-insumos-reserva/actividades-insumos-reserva.module';
import { ActividadesInsumosUsoModule } from './actividades-insumos-uso/actividades-insumos-uso.module';
import { ActividadInsumosModule } from './actividad-insumos/actividad-insumos.module';

import { Proveedor } from './proveedores/domain/entities/proveedor.entity';
import { ActividadInsumo } from './actividad-insumos/domain/entities/actividad-insumo.entity';
import { ActividadInsumoReserva } from './actividades-insumos-reserva/domain/entities/actividad-insumo-reserva.entity';
import { ActividadInsumoUso } from './actividades-insumos-uso/domain/entities/actividad-insumo-uso.entity';
import { MovimientoInsumo } from './movimientos-insumos/domain/entities/movimiento-insumo.entity';
import { Reserva } from './reservas/domain/entities/reserva.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'backend_proveedores',
      entities: [
        Proveedor,
        ActividadInsumo,
        ActividadInsumoReserva,
        ActividadInsumoUso,
        MovimientoInsumo,
        Reserva,
      ],
      synchronize: true,
    }),

    ProveedoresModule,
    MovimientosInsumosModule,
    ReservasModule,
    ActividadesInsumosReservaModule,
    ActividadesInsumosUsoModule,
    ActividadInsumosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}