import { Injectable, Inject } from '@nestjs/common';

import { Reserva } from '../../domain/entities/reserva.entity';
import type { ReservaRepositoryPort } from '../../ports/output/reserva.repository.port';

@Injectable()
export class FindAllReservaUseCase {
  constructor(
    @Inject('ReservaRepositoryPort')
    private readonly reservaRepository: ReservaRepositoryPort,
  ) {}

  async execute(): Promise<Reserva[]> {
    return await this.reservaRepository.findAll();
  }
}