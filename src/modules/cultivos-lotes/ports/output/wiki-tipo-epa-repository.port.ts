import { WikiTipoEpa } from '../../domain/entities/wiki-tipo-epa.entity';

export interface WikiTipoEpaRepositoryPort {
  create(data: Partial<WikiTipoEpa>): Promise<WikiTipoEpa>;
  findAll(): Promise<WikiTipoEpa[]>;
  findById(id: number): Promise<WikiTipoEpa | null>;
  update(id: number, data: Partial<WikiTipoEpa>): Promise<WikiTipoEpa | null>;
  remove(id: number): Promise<void>;
}

export const WIKI_TIPO_EPA_REPOSITORY = 'WIKI_TIPO_EPA_REPOSITORY';
