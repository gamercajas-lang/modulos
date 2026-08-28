import 'reflect-metadata';

import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config();

import { Proveedor } from './proveedores/domain/entities/proveedor.entity';
import { ActividadInsumo } from './actividad-insumos/domain/entities/actividad-insumo.entity';
import { ActividadInsumoReserva } from './actividades-insumos-reserva/domain/entities/actividad-insumo-reserva.entity';
import { ActividadInsumoUso } from './actividades-insumos-uso/domain/entities/actividad-insumo-uso.entity';
import { MovimientoInsumo } from './movimientos-insumos/domain/entities/movimiento-insumo.entity';
import { Reserva } from './reservas/domain/entities/reserva.entity';

export default new DataSource({
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

  migrations: ['src/migrations/*.ts'],
});