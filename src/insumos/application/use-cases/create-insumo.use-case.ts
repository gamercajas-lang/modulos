import { Injectable } from '@nestjs/common';

import { CreateInsumoDto } from '../dto/create-insumo.dto';
import { Insumo } from '../../domain/entities/insumo.entity';
import { InsumoDomainService } from '../../domain/services/insumo-domain.service';
import { InsumosRepository } from '../../adapters/output/persistence/insumos.repository';

@Injectable()
export class CreateInsumoUseCase {
  constructor(
    private readonly insumoRepository: InsumosRepository,
    private readonly insumoDomainService: InsumoDomainService,
  ) {}

  async execute(createInsumoDto: CreateInsumoDto): Promise<Insumo> {
    const insumo = this.insumoDomainService.crearInsumo(createInsumoDto);
    return await this.insumoRepository.create(insumo);
  }
}
