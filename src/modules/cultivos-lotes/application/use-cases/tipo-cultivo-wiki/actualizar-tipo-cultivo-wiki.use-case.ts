import { Inject, Injectable } from '@nestjs/common';
import {
  TIPO_CULTIVO_WIKI_REPOSITORY,
  TipoCultivoWikiRepositoryPort,
} from '../../../ports/output/tipo-cultivo-wiki-repository.port';
import { UpdateTipoCultivoWikiDto } from '../../dto/tipo-cultivo-wiki/update-tipo-cultivo-wiki.dto';

@Injectable()
export class ActualizarTipoCultivoWikiUseCase {
  constructor(
    @Inject(TIPO_CULTIVO_WIKI_REPOSITORY)
    private readonly tipoCultivoWikiRepository: TipoCultivoWikiRepositoryPort,
  ) {}

  execute(id: number, dto: UpdateTipoCultivoWikiDto) {
    return this.tipoCultivoWikiRepository.update(id, dto);
  }
}
