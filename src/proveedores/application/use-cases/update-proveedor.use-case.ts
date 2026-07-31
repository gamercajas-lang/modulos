import { Injectable, NotFoundException } from '@nestjs/common';

import { UpdateProveedorDto } from '../dto/update-proveedor.dto';
import { Proveedor } from '../../domain/entities/proveedor.entity';
import { ProveedoresRepository } from '../../adapters/output/persistence/proveedores.repository';
@Injectable()
export class UpdateProveedorUseCase {
  constructor(
    private readonly proveedorRepository: ProveedoresRepository,
  ) {}

  async execute(
    id: number,
    updateProveedorDto: UpdateProveedorDto,
  ): Promise<Proveedor> {
    const proveedor = await this.proveedorRepository.findById(id);

    if (!proveedor) {
      throw new NotFoundException('Proveedor no encontrado');
    }

    return await this.proveedorRepository.update(id, updateProveedorDto);
  }
}