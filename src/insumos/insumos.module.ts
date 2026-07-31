import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Insumo } from './domain/entities/insumo.entity';

import { InsumosController } from './adapters/input/rest/insumos.controller';
import { InsumosRepository } from './adapters/output/persistence/insumos.repository';

import { InsumoDomainService } from './domain/services/insumo-domain.service';

import { CreateInsumoUseCase } from './application/use-cases/create-insumo.use-case';
import { UpdateInsumoUseCase } from './application/use-cases/update-insumo.use-case';
import { DeleteInsumoUseCase } from './application/use-cases/delete-insumo.use-case';
import { FindAllInsumoUseCase } from './application/use-cases/find-all-insumo.use-case';
import { FindOneInsumoUseCase } from './application/use-cases/find-one-insumo.use-case';

@Module({
  imports: [
    TypeOrmModule.forFeature([Insumo]),
  ],
  controllers: [
    InsumosController,
  ],
  providers: [
    InsumosRepository,
    InsumoDomainService,

    CreateInsumoUseCase,
    UpdateInsumoUseCase,
    DeleteInsumoUseCase,
    FindAllInsumoUseCase,
    FindOneInsumoUseCase,
  ],
  exports: [
    InsumosRepository,
    InsumoDomainService,
  ],
})
export class InsumosModule {}
