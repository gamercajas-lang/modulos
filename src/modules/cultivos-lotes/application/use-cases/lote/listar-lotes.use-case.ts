import { Inject, Injectable } from '@nestjs/common';
import { LOTE_REPOSITORY, LoteRepositoryPort } from '../../../ports/output/lote-repository.port';

@Injectable()
export class ListarLotesUseCase {
  constructor(
    @Inject(LOTE_REPOSITORY)
    private readonly loteRepository: LoteRepositoryPort,
  ) {}

  execute() {
    return this.loteRepository.findAll();
  }
}
