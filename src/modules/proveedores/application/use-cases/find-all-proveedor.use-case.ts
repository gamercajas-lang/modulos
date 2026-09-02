import { Injectable } from '@nestjs/common';

import { Proveedor } from '../../domain/entities/proveedor.entity';
import { ProveedoresRepository } from '../../adapters/output/persistence/proveedores.repository';
@Injectable()
export class FindAllProveedorUseCase {
  constructor(
    private readonly proveedorRepository: ProveedoresRepository,
  ) {}

  async execute(): Promise<Proveedor[]> {
    return await this.proveedorRepository.findAll();
  }
}