import { Epa } from '../../domain/entities/epa.entity';

export interface EpaRepositoryPort {
  create(data: Partial<Epa>): Promise<Epa>;
  findAll(): Promise<Epa[]>;
  findById(id: number): Promise<Epa | null>;
  update(id: number, data: Partial<Epa>): Promise<Epa | null>;
  remove(id: number): Promise<void>;
}

export const EPA_REPOSITORY = 'EPA_REPOSITORY';
