import { Inject, Injectable } from '@nestjs/common';
import { EPA_REPOSITORY, EpaRepositoryPort } from '../../../ports/output/epa-repository.port';
import { CreateEpaDto } from '../../dto/epa/create-epa.dto';

@Injectable()
export class CrearEpaUseCase {
  constructor(
    @Inject(EPA_REPOSITORY)
    private readonly epaRepository: EpaRepositoryPort,
  ) {}

  execute(dto: CreateEpaDto) {
    return this.epaRepository.create(dto);
  }
}
