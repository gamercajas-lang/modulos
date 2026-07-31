import { Categoria } from '../models/categoria.model';

export interface ICategoriaRepository {
  create(categoria: Partial<Categoria>): Promise<Categoria>;
  findById(id: number): Promise<Categoria | null>;
  findAll(): Promise<Categoria[]>;
  update(id: number, categoria: Partial<Categoria>): Promise<Categoria | null>;
  delete(id: number): Promise<boolean>;
}

export const ICategoriaRepository = Symbol('ICategoriaRepository');
