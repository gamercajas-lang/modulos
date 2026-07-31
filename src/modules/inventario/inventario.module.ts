import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Entities
import { CategoriaEntity } from './infrastructure/persistence/entities/categoria.entity';
import { AlmacenEntity } from './infrastructure/persistence/entities/almacen.entity';
import { InsumoEntity } from './infrastructure/persistence/entities/insumo.entity';

// Repository Ports
import { ICategoriaRepository } from './domain/ports/categoria.repository.port';
import { IAlmacenRepository } from './domain/ports/almacen.repository.port';
import { IInsumoRepository } from './domain/ports/insumo.repository.port';

// Repository TypeORM Implementations
import { TypeOrmCategoriaRepository } from './infrastructure/persistence/repositories/categoria.typeorm.repository';
import { TypeOrmAlmacenRepository } from './infrastructure/persistence/repositories/almacen.typeorm.repository';
import { TypeOrmInsumoRepository } from './infrastructure/persistence/repositories/insumo.typeorm.repository';

// Use Cases
import { CategoriaUseCases } from './application/use-cases/categoria.use-cases';
import { AlmacenUseCases } from './application/use-cases/almacen.use-cases';
import { InsumoUseCases } from './application/use-cases/insumo.use-cases';

// Controllers
import { CategoriaController } from './infrastructure/controllers/categoria.controller';
import { AlmacenController } from './infrastructure/controllers/almacen.controller';
import { InsumoController } from './infrastructure/controllers/insumo.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([CategoriaEntity, AlmacenEntity, InsumoEntity]),
  ],
  controllers: [CategoriaController, AlmacenController, InsumoController],
  providers: [
    CategoriaUseCases,
    AlmacenUseCases,
    InsumoUseCases,
    {
      provide: ICategoriaRepository,
      useClass: TypeOrmCategoriaRepository,
    },
    {
      provide: IAlmacenRepository,
      useClass: TypeOrmAlmacenRepository,
    },
    {
      provide: IInsumoRepository,
      useClass: TypeOrmInsumoRepository,
    },
  ],
  exports: [CategoriaUseCases, AlmacenUseCases, InsumoUseCases],
})
export class InventarioModule {}
