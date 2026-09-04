import { Inject, Injectable } from '@nestjs/common';
import {
  TIPO_CULTIVO_WIKI_REPOSITORY,
  TipoCultivoWikiRepositoryPort,
} from '../../../ports/output/tipo-cultivo-wiki-repository.port';

@Injectable()
export class ListarTiposCultivosWikiUseCase {
  constructor(
    @Inject(TIPO_CULTIVO_WIKI_REPOSITORY)
    private readonly tipoCultivoWikiRepository: TipoCultivoWikiRepositoryPort,
  ) {}

  execute() {
    return this.tipoCultivoWikiRepository.findAll();
  }
}
