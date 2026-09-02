import 'reflect-metadata';

import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config();

import { Proveedor } from './modules/proveedores/domain/entities/proveedor.entity';
import { ActividadInsumo } from './modules/actividad-insumos/domain/entities/actividad-insumo.entity';
import { ActividadInsumoReserva } from './modules/actividades-insumos-reserva/domain/entities/actividad-insumo-reserva.entity';
import { ActividadInsumoUso } from './modules/actividades-insumos-uso/domain/entities/actividad-insumo-uso.entity';
import { MovimientoInsumo } from './modules/movimientos-insumos/domain/entities/movimiento-insumo.entity';
import { Reserva } from './modules/reservas/domain/entities/reserva.entity';

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