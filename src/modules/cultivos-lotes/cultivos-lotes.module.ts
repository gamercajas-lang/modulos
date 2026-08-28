import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './adapters/input/rest/auth/jwt.strategy';

import { Lote } from './domain/entities/lote.entity';
import { Sublote } from './domain/entities/sublote.entity';
import { Cultivo } from './domain/entities/cultivo.entity';
import { CultivoHistorial } from './domain/entities/cultivo-historial.entity';
import { Epa } from './domain/entities/epa.entity';
import { TipoCultivoWiki } from './domain/entities/tipo-cultivo-wiki.entity';
import { WikiTipoEpa } from './domain/entities/wiki-tipo-epa.entity';

import { LotesController } from './adapters/input/rest/lotes.controller';
import { EpasController } from './adapters/input/rest/epas.controller';
import { TiposCultivosWikiController } from './adapters/input/rest/tipos-cultivos-wiki.controller';
import { WikiTipoEpaController } from './adapters/input/rest/wiki-tipo-epa.controller';

import { LoteTypeOrmRepository } from './adapters/output/persistence/lote-typeorm.repository';
import { EpaTypeOrmRepository } from './adapters/output/persistence/epa-typeorm.repository';
import { TipoCultivoWikiTypeOrmRepository } from './adapters/output/persistence/tipo-cultivo-wiki-typeorm.repository';
import { WikiTipoEpaTypeOrmRepository } from './adapters/output/persistence/wiki-tipo-epa-typeorm.repository';

import { LOTE_REPOSITORY } from './ports/output/lote-repository.port';
import { EPA_REPOSITORY } from './ports/output/epa-repository.port';
import { TIPO_CULTIVO_WIKI_REPOSITORY } from './ports/output/tipo-cultivo-wiki-repository.port';
import { WIKI_TIPO_EPA_REPOSITORY } from './ports/output/wiki-tipo-epa-repository.port';

import { CrearLoteUseCase } from './application/use-cases/lote/crear-lote.use-case';
import { ListarLotesUseCase } from './application/use-cases/lote/listar-lotes.use-case';
import { ObtenerLoteUseCase } from './application/use-cases/lote/obtener-lote.use-case';
import { ActualizarLoteUseCase } from './application/use-cases/lote/actualizar-lote.use-case';
import { EliminarLoteUseCase } from './application/use-cases/lote/eliminar-lote.use-case';

import { CrearEpaUseCase } from './application/use-cases/epa/crear-epa.use-case';
import { ListarEpasUseCase } from './application/use-cases/epa/listar-epas.use-case';
import { ObtenerEpaUseCase } from './application/use-cases/epa/obtener-epa.use-case';
import { ActualizarEpaUseCase } from './application/use-cases/epa/actualizar-epa.use-case';
import { EliminarEpaUseCase } from './application/use-cases/epa/eliminar-epa.use-case';

import { CrearTipoCultivoWikiUseCase } from './application/use-cases/tipo-cultivo-wiki/crear-tipo-cultivo-wiki.use-case';
import { ListarTiposCultivosWikiUseCase } from './application/use-cases/tipo-cultivo-wiki/listar-tipos-cultivos-wiki.use-case';
import { ObtenerTipoCultivoWikiUseCase } from './application/use-cases/tipo-cultivo-wiki/obtener-tipo-cultivo-wiki.use-case';
import { ActualizarTipoCultivoWikiUseCase } from './application/use-cases/tipo-cultivo-wiki/actualizar-tipo-cultivo-wiki.use-case';
import { EliminarTipoCultivoWikiUseCase } from './application/use-cases/tipo-cultivo-wiki/eliminar-tipo-cultivo-wiki.use-case';

import { CrearWikiTipoEpaUseCase } from './application/use-cases/wiki-tipo-epa/crear-wiki-tipo-epa.use-case';
import { ListarWikiTipoEpaUseCase } from './application/use-cases/wiki-tipo-epa/listar-wiki-tipo-epa.use-case';
import { ObtenerWikiTipoEpaUseCase } from './application/use-cases/wiki-tipo-epa/obtener-wiki-tipo-epa.use-case';
import { ActualizarWikiTipoEpaUseCase } from './application/use-cases/wiki-tipo-epa/actualizar-wiki-tipo-epa.use-case';
import { EliminarWikiTipoEpaUseCase } from './application/use-cases/wiki-tipo-epa/eliminar-wiki-tipo-epa.use-case';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Lote,
      Sublote,
      Cultivo,
      CultivoHistorial,
      Epa,
      TipoCultivoWiki,
      WikiTipoEpa,
    ]),
    PassportModule,
  ],
  controllers: [
    LotesController,
    EpasController,
    TiposCultivosWikiController,
    WikiTipoEpaController,
  ],
  providers: [
    JwtStrategy,
    { provide: LOTE_REPOSITORY, useClass: LoteTypeOrmRepository },
    CrearLoteUseCase,
    ListarLotesUseCase,
    ObtenerLoteUseCase,
    ActualizarLoteUseCase,
    EliminarLoteUseCase,

    { provide: EPA_REPOSITORY, useClass: EpaTypeOrmRepository },
    CrearEpaUseCase,
    ListarEpasUseCase,
    ObtenerEpaUseCase,
    ActualizarEpaUseCase,
    EliminarEpaUseCase,

    { provide: TIPO_CULTIVO_WIKI_REPOSITORY, useClass: TipoCultivoWikiTypeOrmRepository },
    CrearTipoCultivoWikiUseCase,
    ListarTiposCultivosWikiUseCase,
    ObtenerTipoCultivoWikiUseCase,
    ActualizarTipoCultivoWikiUseCase,
    EliminarTipoCultivoWikiUseCase,

    { provide: WIKI_TIPO_EPA_REPOSITORY, useClass: WikiTipoEpaTypeOrmRepository },
    CrearWikiTipoEpaUseCase,
    ListarWikiTipoEpaUseCase,
    ObtenerWikiTipoEpaUseCase,
    ActualizarWikiTipoEpaUseCase,
    EliminarWikiTipoEpaUseCase,
  ],
  exports: [TypeOrmModule],
})
export class CultivosLotesModule {}
