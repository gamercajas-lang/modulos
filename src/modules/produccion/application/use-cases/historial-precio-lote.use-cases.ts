import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IHistorialPrecioLoteRepository } from '../../domain/ports/historial-precio-lote.repository.port';
import { HistorialPrecioLote } from '../../domain/models/historial-precio-lote.model';

@Injectable()
export class HistorialPrecioLoteUseCases {
  constructor(
    @Inject(IHistorialPrecioLoteRepository)
    private readonly repository: IHistorialPrecioLoteRepository,
  ) {}

  async create(data: Partial<HistorialPrecioLote>): Promise<HistorialPrecioLote> {
    return this.repository.create(data);
  }

  async findOne(id: number): Promise<HistorialPrecioLote> {
    const found = await this.repository.findById(id);
    if (!found) {
      throw new NotFoundException(`Historial de precio de lote con ID ${id} no encontrado`);
    }
    return found;
  }

  async findAll(): Promise<HistorialPrecioLote[]> {
    return this.repository.findAll();
  }

  async update(id: number, data: Partial<HistorialPrecioLote>): Promise<HistorialPrecioLote> {
    const updated = await this.repository.update(id, data);
    if (!updated) {
      throw new NotFoundException(`Historial de precio de lote con ID ${id} no encontrado`);
    }
    return updated;
  }

  async remove(id: number): Promise<boolean> {
    const deleted = await this.repository.delete(id);
    if (!deleted) {
      throw new NotFoundException(`Historial de precio de lote con ID ${id} no encontrado o ya eliminado`);
    }
    return deleted;
  }
}
