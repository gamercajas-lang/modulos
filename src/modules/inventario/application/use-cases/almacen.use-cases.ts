import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IAlmacenRepository } from '../../domain/ports/almacen.repository.port';
import { Almacen } from '../../domain/models/almacen.model';

@Injectable()
export class AlmacenUseCases {
  constructor(
    @Inject(IAlmacenRepository)
    private readonly repository: IAlmacenRepository,
  ) {}

  async create(data: Partial<Almacen>): Promise<Almacen> {
    return this.repository.create(data);
  }

  async findOne(id: number): Promise<Almacen> {
    const found = await this.repository.findById(id);
    if (!found) {
      throw new NotFoundException(`Almacén con ID ${id} no encontrado`);
    }
    return found;
  }

  async findAll(): Promise<Almacen[]> {
    return this.repository.findAll();
  }

  async update(id: number, data: Partial<Almacen>): Promise<Almacen> {
    const updated = await this.repository.update(id, data);
    if (!updated) {
      throw new NotFoundException(`Almacén con ID ${id} no encontrado`);
    }
    return updated;
  }

  async remove(id: number): Promise<boolean> {
    const deleted = await this.repository.delete(id);
    if (!deleted) {
      throw new NotFoundException(`Almacén con ID ${id} no encontrado o ya eliminado`);
    }
    return deleted;
  }
}
