import { Injectable } from '@nestjs/common';

import { ActividadInsumoReserva } from '../entities/actividad-insumo-reserva.entity';

@Injectable()
export class ActividadInsumoReservaDomainService {
  create(
    actividadInsumoReserva: ActividadInsumoReserva,
  ): ActividadInsumoReserva {
    return actividadInsumoReserva;
  }

  update(
    actividadInsumoReserva: ActividadInsumoReserva,
  ): ActividadInsumoReserva {
    return actividadInsumoReserva;
  }
}