import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IMovimientoProduccionRepository } from '../../domain/ports/movimiento-produccion.repository.port';
import { MovimientoProduccion } from '../../domain/models/movimiento-produccion.model';

@Injectable()
export class MovimientoProduccionUseCases {
  constructor(
    @Inject(IMovimientoProduccionRepository)
    private readonly repository: IMovimientoProduccionRepository,
  ) {}

  async create(data: Partial<MovimientoProduccion>): Promise<MovimientoProduccion> {
    return this.repository.create(data);
  }

  async findOne(id: number): Promise<MovimientoProduccion> {
    const found = await this.repository.findById(id);
    if (!found) {
      throw new NotFoundException(`Movimiento de producción con ID ${id} no encontrado`);
    }
    return found;
  }

  async findAll(): Promise<MovimientoProduccion[]> {
    return this.repository.findAll();
  }

  async update(id: number, data: Partial<MovimientoProduccion>): Promise<MovimientoProduccion> {
    const updated = await this.repository.update(id, data);
    if (!updated) {
      throw new NotFoundException(`Movimiento de producción con ID ${id} no encontrado`);
    }
    return updated;
  }

  async remove(id: number): Promise<boolean> {
    const deleted = await this.repository.delete(id);
    if (!deleted) {
      throw new NotFoundException(`Movimiento de producción con ID ${id} no encontrado o ya eliminado`);
    }
    return deleted;
  }
}
