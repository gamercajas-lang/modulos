import { Injectable } from '@nestjs/common';

import { Insumo } from '../../domain/entities/insumo.entity';
import { InsumosRepository } from '../../adapters/output/persistence/insumos.repository';

@Injectable()
export class FindAllInsumoUseCase {
  constructor(private readonly insumoRepository: InsumosRepository) {}

  async execute(): Promise<Insumo[]> {
    return await this.insumoRepository.findAll();
  }
}
