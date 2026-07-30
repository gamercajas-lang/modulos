import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Lote } from './domain/entities/lote.entity';
import { Sublote } from './domain/entities/sublote.entity';
import { Cultivo } from './domain/entities/cultivo.entity';
import { CultivoHistorial } from './domain/entities/cultivo-historial.entity';

import { LotesController } from './adapters/input/rest/lotes.controller';
import { LoteTypeOrmRepository } from './adapters/output/persistence/lote-typeorm.repository';
import { LOTE_REPOSITORY } from './ports/output/lote-repository.port';

import { CrearLoteUseCase } from './application/use-cases/lote/crear-lote.use-case';
import { ListarLotesUseCase } from './application/use-cases/lote/listar-lotes.use-case';
import { ObtenerLoteUseCase } from './application/use-cases/lote/obtener-lote.use-case';
import { ActualizarLoteUseCase } from './application/use-cases/lote/actualizar-lote.use-case';
import { EliminarLoteUseCase } from './application/use-cases/lote/eliminar-lote.use-case';

// Sublote, Cultivo y CultivoHistorial se registran ya para que TypeORM las reconozca
// (autoLoadEntities + relaciones). Sus controladores y casos de uso propios se agregan
// en el siguiente paso, junto con epas / tipos_cultivos_wiki / wiki_tipo_epa.

@Module({
  imports: [
    TypeOrmModule.forFeature([Lote, Sublote, Cultivo, CultivoHistorial]),
  ],
  controllers: [LotesController],
  providers: [
    { provide: LOTE_REPOSITORY, useClass: LoteTypeOrmRepository },
    CrearLoteUseCase,
    ListarLotesUseCase,
    ObtenerLoteUseCase,
    ActualizarLoteUseCase,
    EliminarLoteUseCase,
  ],
  exports: [TypeOrmModule],
})
export class CultivosLotesModule {}
