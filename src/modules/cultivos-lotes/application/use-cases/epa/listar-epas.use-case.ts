import { Inject, Injectable } from '@nestjs/common';
import { EPA_REPOSITORY, EpaRepositoryPort } from '../../../ports/output/epa-repository.port';

@Injectable()
export class ListarEpasUseCase {
  constructor(
    @Inject(EPA_REPOSITORY)
    private readonly epaRepository: EpaRepositoryPort,
  ) {}

  execute() {
    return this.epaRepository.findAll();
  }
}
