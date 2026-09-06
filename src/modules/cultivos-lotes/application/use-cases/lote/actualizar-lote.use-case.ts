import { Inject, Injectable } from '@nestjs/common';
import { LOTE_REPOSITORY, LoteRepositoryPort } from '../../../ports/output/lote-repository.port';
import { UpdateLoteDto } from '../../dto/lote/update-lote.dto';

@Injectable()
export class ActualizarLoteUseCase {
  constructor(
    @Inject(LOTE_REPOSITORY)
    private readonly loteRepository: LoteRepositoryPort,
  ) {}

  execute(id: number, dto: UpdateLoteDto) {
    return this.loteRepository.update(id, dto);
  }
}
