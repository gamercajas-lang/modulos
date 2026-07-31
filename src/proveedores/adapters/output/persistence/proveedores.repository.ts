import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Proveedor } from '../../../domain/entities/proveedor.entity';
import { ProveedorRepositoryPort } from '../../../ports/output/proveedor.repository.port';

@Injectable()
export class ProveedoresRepository implements ProveedorRepositoryPort {
  constructor(
    @InjectRepository(Proveedor)
    private readonly repository: Repository<Proveedor>,
  ) {}

  async create(proveedor: Proveedor): Promise<Proveedor> {
    return await this.repository.save(proveedor);
  }

  async findAll(): Promise<Proveedor[]> {
    return await this.repository.find();
  }

  async findById(id: number): Promise<Proveedor | null> {
    return await this.repository.findOne({
      where: { id },
    });
  }

  async update(id: number, proveedor: Partial<Proveedor>): Promise<Proveedor> {
    await this.repository.update(id, proveedor);

    const proveedorActualizado = await this.findById(id);

    if (!proveedorActualizado) {
      throw new NotFoundException('Proveedor no encontrado');
    }

    return proveedorActualizado;
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}