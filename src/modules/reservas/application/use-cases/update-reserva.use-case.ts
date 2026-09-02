import {
  Injectable,
  Inject,
  NotFoundException,
} from '@nestjs/common';

import { UpdateReservaDto } from '../dto/update-reserva.dto';
import { Reserva } from '../../domain/entities/reserva.entity';
import { ReservaDomainService } from '../../domain/services/reserva-domain.service';
import type { ReservaRepositoryPort } from '../../ports/output/reserva.repository.port';

@Injectable()
export class UpdateReservaUseCase {
  constructor(
    @Inject('ReservaRepositoryPort')
    private readonly reservaRepository: ReservaRepositoryPort,
    private readonly reservaDomainService: ReservaDomainService,
  ) {}

  async execute(
    id: number,
    dto: UpdateReservaDto,
  ): Promise<Reserva> {
    const reserva = await this.reservaRepository.findById(id);

    if (!reserva) {
      throw new NotFoundException('Reserva no encontrada');
    }

    this.reservaDomainService.validateUpdate(dto);

    return await this.reservaRepository.update(id, dto);
  }
}