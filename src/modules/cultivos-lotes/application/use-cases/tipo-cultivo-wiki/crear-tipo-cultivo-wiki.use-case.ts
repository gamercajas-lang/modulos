import { Inject, Injectable } from '@nestjs/common';
import {
  TIPO_CULTIVO_WIKI_REPOSITORY,
  TipoCultivoWikiRepositoryPort,
} from '../../../ports/output/tipo-cultivo-wiki-repository.port';
import { CreateTipoCultivoWikiDto } from '../../dto/tipo-cultivo-wiki/create-tipo-cultivo-wiki.dto';

@Injectable()
export class CrearTipoCultivoWikiUseCase {
  constructor(
    @Inject(TIPO_CULTIVO_WIKI_REPOSITORY)
    private readonly tipoCultivoWikiRepository: TipoCultivoWikiRepositoryPort,
  ) {}

  execute(dto: CreateTipoCultivoWikiDto) {
    return this.tipoCultivoWikiRepository.create(dto);
  }
}
