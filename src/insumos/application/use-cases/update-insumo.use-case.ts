import { Injectable } from '@nestjs/common';

import { UpdateInsumoDto } from '../dto/update-insumo.dto';
import { Insumo } from '../../domain/entities/insumo.entity';
import { InsumosRepository } from '../../adapters/output/persistence/insumos.repository';
import { FindOneInsumoUseCase } from './find-one-insumo.use-case';

@Injectable()
export class UpdateInsumoUseCase {
  constructor(
    private readonly insumoRepository: InsumosRepository,
    private readonly findOneInsumoUseCase: FindOneInsumoUseCase,
  ) {}

  async execute(id: number, updateInsumoDto: UpdateInsumoDto): Promise<Insumo> {
    await this.findOneInsumoUseCase.execute(id);
    return await this.insumoRepository.update(id, updateInsumoDto);
  }
}
