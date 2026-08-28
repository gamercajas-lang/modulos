import { Injectable, NotFoundException } from '@nestjs/common';

import { Proveedor } from '../../domain/entities/proveedor.entity';
import { ProveedoresRepository } from '../../adapters/output/persistence/proveedores.repository';

@Injectable()
export class FindOneProveedorUseCase {
  constructor(
    private readonly proveedorRepository: ProveedoresRepository,
  ) {}

  async execute(id: number): Promise<Proveedor> {
    const proveedor = await this.proveedorRepository.findById(id);

    if (!proveedor) {
      throw new NotFoundException('Proveedor no encontrado');
    }

    return proveedor;
  }
}