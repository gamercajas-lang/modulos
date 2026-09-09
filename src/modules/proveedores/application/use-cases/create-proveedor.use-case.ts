import { Injectable, BadRequestException } from '@nestjs/common';

import { CreateProveedorDto } from '../dto/create-proveedor.dto';
import { Proveedor } from '../../domain/entities/proveedor.entity';
import { ProveedorDomainService } from '../../domain/services/proveedor-domain.service';
import { ProveedoresRepository } from '../../adapters/output/persistence/proveedores.repository';

@Injectable()
export class CreateProveedorUseCase {
  constructor(
  private readonly proveedorRepository: ProveedoresRepository,
  private readonly proveedorDomainService: ProveedorDomainService,
) {}

  async execute(
    createProveedorDto: CreateProveedorDto,
  ): Promise<Proveedor> {
    const { nombre } = createProveedorDto;

    const nombreValido =
      this.proveedorDomainService.validarNombre(nombre);

    if (!nombreValido) {
      throw new BadRequestException('El nombre del proveedor es obligatorio');
    }

    const proveedor =
      this.proveedorDomainService.crearProveedor(nombre);

    return await this.proveedorRepository.create(proveedor);
  }
}