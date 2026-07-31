import { ProductoAgro } from '../models/producto-agro.model';

export interface IProductoAgroRepository {
  create(producto: Partial<ProductoAgro>): Promise<ProductoAgro>;
  findById(id: number): Promise<ProductoAgro | null>;
  findAll(): Promise<ProductoAgro[]>;
  update(id: number, producto: Partial<ProductoAgro>): Promise<ProductoAgro | null>;
  delete(id: number): Promise<boolean>;
}

export const IProductoAgroRepository = Symbol('IProductoAgroRepository');
