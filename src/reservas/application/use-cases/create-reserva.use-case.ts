import { Injectable, Inject } from '@nestjs/common';

import { CreateReservaDto } from '../dto/create-reserva.dto';
import { Reserva } from '../../domain/entities/reserva.entity';
import { ReservaDomainService } from '../../domain/services/reserva-domain.service';
import type { ReservaRepositoryPort } from '../../ports/output/reserva.repository.port';

@Injectable()
export class CreateReservaUseCase {
  constructor(
    @Inject('ReservaRepositoryPort')
    private readonly reservaRepository: ReservaRepositoryPort,
    private readonly reservaDomainService: ReservaDomainService,
  ) {}

  async execute(dto: CreateReservaDto): Promise<Reserva> {
    const reserva = Object.assign(new Reserva(), dto);

    this.reservaDomainService.validateCreate(reserva);

    return await this.reservaRepository.create(reserva);
  }
}