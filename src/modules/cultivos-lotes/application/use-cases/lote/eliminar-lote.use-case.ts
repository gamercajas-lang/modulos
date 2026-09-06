import { Inject, Injectable } from '@nestjs/common';
import { LOTE_REPOSITORY, LoteRepositoryPort } from '../../../ports/output/lote-repository.port';

@Injectable()
export class EliminarLoteUseCase {
  constructor(
    @Inject(LOTE_REPOSITORY)
    private readonly loteRepository: LoteRepositoryPort,
  ) {}

  execute(id: number) {
    return this.loteRepository.remove(id);
  }
}
