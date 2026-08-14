import { Inject, Injectable } from '@nestjs/common';
import {
  WIKI_TIPO_EPA_REPOSITORY,
  WikiTipoEpaRepositoryPort,
} from '../../../ports/output/wiki-tipo-epa-repository.port';
import { UpdateWikiTipoEpaDto } from '../../dto/wiki-tipo-epa/update-wiki-tipo-epa.dto';

@Injectable()
export class ActualizarWikiTipoEpaUseCase {
  constructor(
    @Inject(WIKI_TIPO_EPA_REPOSITORY)
    private readonly wikiTipoEpaRepository: WikiTipoEpaRepositoryPort,
  ) {}

  execute(id: number, dto: UpdateWikiTipoEpaDto) {
    return this.wikiTipoEpaRepository.update(id, dto);
  }
}
