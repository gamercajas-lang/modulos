import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ICategoriaRepository } from '../../domain/ports/categoria.repository.port';
import { Categoria } from '../../domain/models/categoria.model';

@Injectable()
export class CategoriaUseCases {
  constructor(
    @Inject(ICategoriaRepository)
    private readonly repository: ICategoriaRepository,
  ) {}

  async create(data: Partial<Categoria>): Promise<Categoria> {
    return this.repository.create(data);
  }

  async findOne(id: number): Promise<Categoria> {
    const found = await this.repository.findById(id);
    if (!found) {
      throw new NotFoundException(`Categoría con ID ${id} no encontrada`);
    }
    return found;
  }

  async findAll(): Promise<Categoria[]> {
    return this.repository.findAll();
  }

  async update(id: number, data: Partial<Categoria>): Promise<Categoria> {
    const updated = await this.repository.update(id, data);
    if (!updated) {
      throw new NotFoundException(`Categoría con ID ${id} no encontrada`);
    }
    return updated;
  }

  async remove(id: number): Promise<boolean> {
    const deleted = await this.repository.delete(id);
    if (!deleted) {
      throw new NotFoundException(`Categoría con ID ${id} no encontrada o ya eliminada`);
    }
    return deleted;
  }
}
