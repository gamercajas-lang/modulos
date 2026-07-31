import { LoteProduccion } from '../models/lote-produccion.model';

export interface ILoteProduccionRepository {
  create(lote: Partial<LoteProduccion>): Promise<LoteProduccion>;
  findById(id: number): Promise<LoteProduccion | null>;
  findAll(): Promise<LoteProduccion[]>;
  update(id: number, lote: Partial<LoteProduccion>): Promise<LoteProduccion | null>;
  delete(id: number): Promise<boolean>;
}

export const ILoteProduccionRepository = Symbol('ILoteProduccionRepository');
