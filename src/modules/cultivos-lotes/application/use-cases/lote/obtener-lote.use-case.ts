import { Inject, Injectable } from '@nestjs/common';
import { LOTE_REPOSITORY, LoteRepositoryPort } from '../../../ports/output/lote-repository.port';

@Injectable()
export class ObtenerLoteUseCase {
  constructor(
    @Inject(LOTE_REPOSITORY)
    private readonly loteRepository: LoteRepositoryPort,
  ) {}

  execute(id: number) {
    return this.loteRepository.findById(id);
  }
}
