import {
  Injectable,
  Inject,
  NotFoundException,
} from '@nestjs/common';

import { Reserva } from '../../domain/entities/reserva.entity';
import type { ReservaRepositoryPort } from '../../ports/output/reserva.repository.port';

@Injectable()
export class FindOneReservaUseCase {
  constructor(
    @Inject('ReservaRepositoryPort')
    private readonly reservaRepository: ReservaRepositoryPort,
  ) {}

  async execute(id: number): Promise<Reserva> {
    const reserva = await this.reservaRepository.findById(id);

    if (!reserva) {
      throw new NotFoundException('Reserva no encontrada');
    }

    return reserva;
  }
}