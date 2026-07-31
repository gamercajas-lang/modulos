import { Injectable, NotFoundException } from '@nestjs/common';

import { Insumo } from '../../domain/entities/insumo.entity';
import { InsumosRepository } from '../../adapters/output/persistence/insumos.repository';

@Injectable()
export class FindOneInsumoUseCase {
  constructor(private readonly insumoRepository: InsumosRepository) {}

  async execute(id: number): Promise<Insumo> {
    const insumo = await this.insumoRepository.findById(id);
    if (!insumo) {
      throw new NotFoundException(`Insumo ${id} no encontrado`);
    }
    return insumo;
  }
}
