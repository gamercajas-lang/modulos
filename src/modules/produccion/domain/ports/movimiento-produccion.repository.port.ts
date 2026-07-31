import { MovimientoProduccion } from '../models/movimiento-produccion.model';

export interface IMovimientoProduccionRepository {
  create(movimiento: Partial<MovimientoProduccion>): Promise<MovimientoProduccion>;
  findById(id: number): Promise<MovimientoProduccion | null>;
  findAll(): Promise<MovimientoProduccion[]>;
  update(id: number, movimiento: Partial<MovimientoProduccion>): Promise<MovimientoProduccion | null>;
  delete(id: number): Promise<boolean>;
}

export const IMovimientoProduccionRepository = Symbol('IMovimientoProduccionRepository');
