import { Insumo } from '../../domain/entities/insumo.entity';

export interface InsumoRepositoryPort {
  create(insumo: Insumo): Promise<Insumo>;
  findAll(): Promise<Insumo[]>;
  findById(id: number): Promise<Insumo | null>;
  update(id: number, insumo: Partial<Insumo>): Promise<Insumo>;
  delete(id: number): Promise<void>;
  save(insumo: Insumo): Promise<Insumo>;
}
