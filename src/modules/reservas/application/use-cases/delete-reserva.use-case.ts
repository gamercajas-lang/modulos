import {
  Injectable,
  Inject,
  NotFoundException,
} from '@nestjs/common';

import type { ReservaRepositoryPort } from '../../ports/output/reserva.repository.port';

@Injectable()
export class DeleteReservaUseCase {
  constructor(
    @Inject('ReservaRepositoryPort')
    private readonly reservaRepository: ReservaRepositoryPort,
  ) {}

  async execute(id: number): Promise<void> {
    const reserva = await this.reservaRepository.findById(id);

    if (!reserva) {
      throw new NotFoundException('Reserva no encontrada');
    }

    await this.reservaRepository.delete(id);
  }
}