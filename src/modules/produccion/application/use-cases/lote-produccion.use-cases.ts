import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ILoteProduccionRepository } from '../../domain/ports/lote-produccion.repository.port';
import { LoteProduccion } from '../../domain/models/lote-produccion.model';

@Injectable()
export class LoteProduccionUseCases {
  constructor(
    @Inject(ILoteProduccionRepository)
    private readonly repository: ILoteProduccionRepository,
  ) {}

  async create(data: Partial<LoteProduccion>): Promise<LoteProduccion> {
    return this.repository.create(data);
  }

  async findOne(id: number): Promise<LoteProduccion> {
    const found = await this.repository.findById(id);
    if (!found) {
      throw new NotFoundException(`Lote de producción con ID ${id} no encontrado`);
    }
    return found;
  }

  async findAll(): Promise<LoteProduccion[]> {
    return this.repository.findAll();
  }

  async update(id: number, data: Partial<LoteProduccion>): Promise<LoteProduccion> {
    const updated = await this.repository.update(id, data);
    if (!updated) {
      throw new NotFoundException(`Lote de producción con ID ${id} no encontrado`);
    }
    return updated;
  }

  async remove(id: number): Promise<boolean> {
    const deleted = await this.repository.delete(id);
    if (!deleted) {
      throw new NotFoundException(`Lote de producción con ID ${id} no encontrado o ya eliminado`);
    }
    return deleted;
  }
}
