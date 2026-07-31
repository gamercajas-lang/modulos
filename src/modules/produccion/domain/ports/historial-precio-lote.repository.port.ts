import { HistorialPrecioLote } from '../models/historial-precio-lote.model';

export interface IHistorialPrecioLoteRepository {
  create(historial: Partial<HistorialPrecioLote>): Promise<HistorialPrecioLote>;
  findById(id: number): Promise<HistorialPrecioLote | null>;
  findAll(): Promise<HistorialPrecioLote[]>;
  update(id: number, historial: Partial<HistorialPrecioLote>): Promise<HistorialPrecioLote | null>;
  delete(id: number): Promise<boolean>;
}

export const IHistorialPrecioLoteRepository = Symbol('IHistorialPrecioLoteRepository');
