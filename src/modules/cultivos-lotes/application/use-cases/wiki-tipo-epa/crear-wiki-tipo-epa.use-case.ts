import { Inject, Injectable } from '@nestjs/common';
import {
  WIKI_TIPO_EPA_REPOSITORY,
  WikiTipoEpaRepositoryPort,
} from '../../../ports/output/wiki-tipo-epa-repository.port';
import { CreateWikiTipoEpaDto } from '../../dto/wiki-tipo-epa/create-wiki-tipo-epa.dto';

@Injectable()
export class CrearWikiTipoEpaUseCase {
  constructor(
    @Inject(WIKI_TIPO_EPA_REPOSITORY)
    private readonly wikiTipoEpaRepository: WikiTipoEpaRepositoryPort,
  ) {}

  execute(dto: CreateWikiTipoEpaDto) {
    return this.wikiTipoEpaRepository.create(dto);
  }
}
