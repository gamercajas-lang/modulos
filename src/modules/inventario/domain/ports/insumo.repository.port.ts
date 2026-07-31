import { Insumo } from '../models/insumo.model';

export interface IInsumoRepository {
  create(insumo: Partial<Insumo>): Promise<Insumo>;
  findById(id: number): Promise<Insumo | null>;
  findAll(): Promise<Insumo[]>;
  update(id: number, insumo: Partial<Insumo>): Promise<Insumo | null>;
  delete(id: number): Promise<boolean>;
}

export const IInsumoRepository = Symbol('IInsumoRepository');
