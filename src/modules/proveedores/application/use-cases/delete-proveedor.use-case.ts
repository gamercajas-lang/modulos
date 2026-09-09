import { Injectable, NotFoundException } from '@nestjs/common';

import { ProveedoresRepository } from '../../adapters/output/persistence/proveedores.repository';

@Injectable()
export class DeleteProveedorUseCase {
  constructor(
    private readonly proveedorRepository: ProveedoresRepository,
  ) {}

  async execute(id: number): Promise<void> {
    const proveedor = await this.proveedorRepository.findById(id);

    if (!proveedor) {
      throw new NotFoundException('Proveedor no encontrado');
    }

    await this.proveedorRepository.delete(id);
  }
}