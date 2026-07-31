import { Injectable } from '@nestjs/common';

import { Reserva } from '../entities/reserva.entity';

@Injectable()
export class ReservaDomainService {
  validateCreate(reserva: Reserva): void {
    if (reserva.cantidad <= 0) {
      throw new Error('La cantidad debe ser mayor que cero');
    }

    if (!reserva.motivo) {
      throw new Error('El motivo es obligatorio');
    }
  }

  validateUpdate(reserva: Partial<Reserva>): void {
    if (
      reserva.cantidad !== undefined &&
      reserva.cantidad <= 0
    ) {
      throw new Error('La cantidad debe ser mayor que cero');
    }
  }
}