import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IProductoAgroRepository } from '../../domain/ports/producto-agro.repository.port';
import { ProductoAgro } from '../../domain/models/producto-agro.model';

@Injectable()
export class ProductoAgroUseCases {
  constructor(
    @Inject(IProductoAgroRepository)
    private readonly repository: IProductoAgroRepository,
  ) {}

  async create(data: Partial<ProductoAgro>): Promise<ProductoAgro> {
    return this.repository.create(data);
  }

  async findOne(id: number): Promise<ProductoAgro> {
    const found = await this.repository.findById(id);
    if (!found) {
      throw new NotFoundException(`Producto agroindustrial con ID ${id} no encontrado`);
    }
    return found;
  }

  async findAll(): Promise<ProductoAgro[]> {
    return this.repository.findAll();
  }

  async update(id: number, data: Partial<ProductoAgro>): Promise<ProductoAgro> {
    const updated = await this.repository.update(id, data);
    if (!updated) {
      throw new NotFoundException(`Producto agroindustrial con ID ${id} no encontrado`);
    }
    return updated;
  }

  async remove(id: number): Promise<boolean> {
    const deleted = await this.repository.delete(id);
    if (!deleted) {
      throw new NotFoundException(`Producto agroindustrial con ID ${id} no encontrado o ya eliminado`);
    }
    return deleted;
  }
}
