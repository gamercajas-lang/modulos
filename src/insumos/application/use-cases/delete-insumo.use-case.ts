import { Injectable } from '@nestjs/common';

import { InsumosRepository } from '../../adapters/output/persistence/insumos.repository';
import { FindOneInsumoUseCase } from './find-one-insumo.use-case';

@Injectable()
export class DeleteInsumoUseCase {
  constructor(
    private readonly insumoRepository: InsumosRepository,
    private readonly findOneInsumoUseCase: FindOneInsumoUseCase,
  ) {}

  async execute(id: number): Promise<void> {
    await this.findOneInsumoUseCase.execute(id);
    await this.insumoRepository.delete(id);
  }
}
