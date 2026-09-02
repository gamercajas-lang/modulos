import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ActividadInsumoReserva } from '../../../domain/entities/actividad-insumo-reserva.entity';
import { ActividadInsumoReservaRepositoryPort } from '../../../ports/output/actividad-insumo-reserva.repository.port';

@Injectable()
export class ActividadesInsumosReservaRepository
  implements ActividadInsumoReservaRepositoryPort
{
  constructor(
    @InjectRepository(ActividadInsumoReserva)
    private readonly repository: Repository<ActividadInsumoReserva>,
  ) {}

  async create(
    actividadInsumoReserva: ActividadInsumoReserva,
  ): Promise<ActividadInsumoReserva> {
    return await this.repository.save(actividadInsumoReserva);
  }

  async findAll(): Promise<ActividadInsumoReserva[]> {
    return await this.repository.find();
  }

  async findById(id: number): Promise<ActividadInsumoReserva | null> {
    return await this.repository.findOne({
      where: { id },
    });
  }

  async update(
    id: number,
    actividadInsumoReserva: Partial<ActividadInsumoReserva>,
  ): Promise<ActividadInsumoReserva> {
    await this.repository.update(id, actividadInsumoReserva);

    const actividadActualizada = await this.findById(id);

    if (!actividadActualizada) {
      throw new NotFoundException(
        'Actividad Insumo Reserva no encontrada',
      );
    }

    return actividadActualizada;
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}