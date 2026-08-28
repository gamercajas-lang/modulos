import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';

import { Proveedor } from './domain/entities/proveedor.entity';

import { ProveedoresController } from './adapters/input/rest/proveedores.controller';
import { ProveedoresRepository } from './adapters/output/persistence/proveedores.repository';

import { ProveedorDomainService } from './domain/services/proveedor-domain.service';

import { CreateProveedorUseCase } from './application/use-cases/create-proveedor.use-case';
import { UpdateProveedorUseCase } from './application/use-cases/update-proveedor.use-case';
import { DeleteProveedorUseCase } from './application/use-cases/delete-proveedor.use-case';
import { FindAllProveedorUseCase } from './application/use-cases/find-all-proveedor.use-case';
import { FindOneProveedorUseCase } from './application/use-cases/find-one-proveedor.use-case';

import { JwtStrategy } from '../shared/strategies/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Proveedor]),
    PassportModule,
  ],
  controllers: [
    ProveedoresController,
  ],
  providers: [
    ProveedoresRepository,
    ProveedorDomainService,
    JwtStrategy,

    CreateProveedorUseCase,
    UpdateProveedorUseCase,
    DeleteProveedorUseCase,
    FindAllProveedorUseCase,
    FindOneProveedorUseCase,
  ],
  exports: [
    ProveedoresRepository,
  ],
})
export class ProveedoresModule {}