import { Inject, Injectable } from '@nestjs/common';
import { LOTE_REPOSITORY, LoteRepositoryPort } from '../../../ports/output/lote-repository.port';
import { CreateLoteDto } from '../../dto/lote/create-lote.dto';

@Injectable()
export class CrearLoteUseCase {
  constructor(
    @Inject(LOTE_REPOSITORY)
    private readonly loteRepository: LoteRepositoryPort,
  ) {}

  execute(dto: CreateLoteDto) {
    return this.loteRepository.create(dto);
  }
}
