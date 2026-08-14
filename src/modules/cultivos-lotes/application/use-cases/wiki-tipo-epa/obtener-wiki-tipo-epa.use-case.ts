import { Inject, Injectable } from '@nestjs/common';
import {
  WIKI_TIPO_EPA_REPOSITORY,
  WikiTipoEpaRepositoryPort,
} from '../../../ports/output/wiki-tipo-epa-repository.port';

@Injectable()
export class ObtenerWikiTipoEpaUseCase {
  constructor(
    @Inject(WIKI_TIPO_EPA_REPOSITORY)
    private readonly wikiTipoEpaRepository: WikiTipoEpaRepositoryPort,
  ) {}

  execute(id: number) {
    return this.wikiTipoEpaRepository.findById(id);
  }
}
