import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Entities
import { ProductoAgroEntity } from './infrastructure/persistence/entities/producto-agro.entity';
import { LoteProduccionEntity } from './infrastructure/persistence/entities/lote-produccion.entity';
import { MovimientoProduccionEntity } from './infrastructure/persistence/entities/movimiento-produccion.entity';
import { HistorialPrecioLoteEntity } from './infrastructure/persistence/entities/historial-precio-lote.entity';

// Repository Ports
import { IProductoAgroRepository } from './domain/ports/producto-agro.repository.port';
import { ILoteProduccionRepository } from './domain/ports/lote-produccion.repository.port';
import { IMovimientoProduccionRepository } from './domain/ports/movimiento-produccion.repository.port';
import { IHistorialPrecioLoteRepository } from './domain/ports/historial-precio-lote.repository.port';

// Repository TypeORM Implementations
import { TypeOrmProductoAgroRepository } from './infrastructure/persistence/repositories/producto-agro.typeorm.repository';
import { TypeOrmLoteProduccionRepository } from './infrastructure/persistence/repositories/lote-produccion.typeorm.repository';
import { TypeOrmMovimientoProduccionRepository } from './infrastructure/persistence/repositories/movimiento-produccion.typeorm.repository';
import { TypeOrmHistorialPrecioLoteRepository } from './infrastructure/persistence/repositories/historial-precio-lote.typeorm.repository';

// Use Cases
import { ProductoAgroUseCases } from './application/use-cases/producto-agro.use-cases';
import { LoteProduccionUseCases } from './application/use-cases/lote-produccion.use-cases';
import { MovimientoProduccionUseCases } from './application/use-cases/movimiento-produccion.use-cases';
import { HistorialPrecioLoteUseCases } from './application/use-cases/historial-precio-lote.use-cases';

// Controllers
import { ProductoAgroController } from './infrastructure/controllers/producto-agro.controller';
import { LoteProduccionController } from './infrastructure/controllers/lote-produccion.controller';
import { MovimientoProduccionController } from './infrastructure/controllers/movimiento-produccion.controller';
import { HistorialPrecioLoteController } from './infrastructure/controllers/historial-precio-lote.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductoAgroEntity,
      LoteProduccionEntity,
      MovimientoProduccionEntity,
      HistorialPrecioLoteEntity,
    ]),
  ],
  controllers: [
    ProductoAgroController,
    LoteProduccionController,
    MovimientoProduccionController,
    HistorialPrecioLoteController,
  ],
  providers: [
    ProductoAgroUseCases,
    LoteProduccionUseCases,
    MovimientoProduccionUseCases,
    HistorialPrecioLoteUseCases,
    {
      provide: IProductoAgroRepository,
      useClass: TypeOrmProductoAgroRepository,
    },
    {
      provide: ILoteProduccionRepository,
      useClass: TypeOrmLoteProduccionRepository,
    },
    {
      provide: IMovimientoProduccionRepository,
      useClass: TypeOrmMovimientoProduccionRepository,
    },
    {
      provide: IHistorialPrecioLoteRepository,
      useClass: TypeOrmHistorialPrecioLoteRepository,
    },
  ],
  exports: [
    ProductoAgroUseCases,
    LoteProduccionUseCases,
    MovimientoProduccionUseCases,
    HistorialPrecioLoteUseCases,
  ],
})
export class ProduccionModule {}
