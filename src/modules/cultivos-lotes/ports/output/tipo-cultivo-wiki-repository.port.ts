import { TipoCultivoWiki } from '../../domain/entities/tipo-cultivo-wiki.entity';

export interface TipoCultivoWikiRepositoryPort {
  create(data: Partial<TipoCultivoWiki>): Promise<TipoCultivoWiki>;
  findAll(): Promise<TipoCultivoWiki[]>;
  findById(id: number): Promise<TipoCultivoWiki | null>;
  update(id: number, data: Partial<TipoCultivoWiki>): Promise<TipoCultivoWiki | null>;
  remove(id: number): Promise<void>;
}

export const TIPO_CULTIVO_WIKI_REPOSITORY = 'TIPO_CULTIVO_WIKI_REPOSITORY';
