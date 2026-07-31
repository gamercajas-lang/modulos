import { Almacen } from '../models/almacen.model';

export interface IAlmacenRepository {
  create(almacen: Partial<Almacen>): Promise<Almacen>;
  findById(id: number): Promise<Almacen | null>;
  findAll(): Promise<Almacen[]>;
  update(id: number, almacen: Partial<Almacen>): Promise<Almacen | null>;
  delete(id: number): Promise<boolean>;
}

export const IAlmacenRepository = Symbol('IAlmacenRepository');
