import { Inject, Injectable } from '@nestjs/common';
import { EPA_REPOSITORY, EpaRepositoryPort } from '../../../ports/output/epa-repository.port';
import { UpdateEpaDto } from '../../dto/epa/update-epa.dto';

@Injectable()
export class ActualizarEpaUseCase {
  constructor(
    @Inject(EPA_REPOSITORY)
    private readonly epaRepository: EpaRepositoryPort,
  ) {}

  execute(id: number, dto: UpdateEpaDto) {
    return this.epaRepository.update(id, dto);
  }
}
