import { Lote } from '../../domain/entities/lote.entity';

export interface LoteRepositoryPort {
  create(data: Partial<Lote>): Promise<Lote>;
  findAll(): Promise<Lote[]>;
  findById(id: number): Promise<Lote | null>;
  update(id: number, data: Partial<Lote>): Promise<Lote | null>;
  remove(id: number): Promise<void>;
}

export const LOTE_REPOSITORY = 'LOTE_REPOSITORY';
