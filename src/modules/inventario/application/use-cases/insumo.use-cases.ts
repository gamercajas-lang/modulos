import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IInsumoRepository } from '../../domain/ports/insumo.repository.port';
import { Insumo } from '../../domain/models/insumo.model';

@Injectable()
export class InsumoUseCases {
  constructor(
    @Inject(IInsumoRepository)
    private readonly repository: IInsumoRepository,
  ) {}

  async create(data: Partial<Insumo>): Promise<Insumo> {
    return this.repository.create(data);
  }

  async findOne(id: number): Promise<Insumo> {
    const found = await this.repository.findById(id);
    if (!found) {
      throw new NotFoundException(`Insumo con ID ${id} no encontrado`);
    }
    return found;
  }

  async findAll(): Promise<Insumo[]> {
    return this.repository.findAll();
  }

  async update(id: number, data: Partial<Insumo>): Promise<Insumo> {
    const updated = await this.repository.update(id, data);
    if (!updated) {
      throw new NotFoundException(`Insumo con ID ${id} no encontrado`);
    }
    return updated;
  }

  async remove(id: number): Promise<boolean> {
    const deleted = await this.repository.delete(id);
    if (!deleted) {
      throw new NotFoundException(`Insumo con ID ${id} no encontrado o ya eliminado`);
    }
    return deleted;
  }
}
