import {
  Injectable,
  Inject,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Reserva } from '../../../domain/entities/reserva.entity';
import { ReservaRepositoryPort } from '../../../ports/output/reserva.repository.port';

@Injectable()
export class ReservasRepository implements ReservaRepositoryPort {
  constructor(
    @InjectRepository(Reserva)
    private readonly repository: Repository<Reserva>,
  ) {}

  async create(reserva: Reserva): Promise<Reserva> {
    return await this.repository.save(reserva);
  }

  async findAll(): Promise<Reserva[]> {
    return await this.repository.find();
  }

  async findById(id: number): Promise<Reserva | null> {
    return await this.repository.findOne({
      where: { id },
    });
  }

  async update(
    id: number,
    reserva: Partial<Reserva>,
  ): Promise<Reserva> {
    await this.repository.update(id, reserva);

    return (await this.findById(id)) as Reserva;
  }

  async delete(id: number): Promise<void> {
    await this.repository.softDelete(id);
  }
}