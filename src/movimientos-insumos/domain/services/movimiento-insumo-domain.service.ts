import { Injectable } from '@nestjs/common';

import { MovimientoInsumo } from '../entities/movimiento-insumo.entity';

@Injectable()
export class MovimientoInsumoDomainService {
  validarCantidad(movimientoInsumo: MovimientoInsumo): void {
    if (movimientoInsumo.cantidadUso <= 0) {
      throw new Error('La cantidad debe ser mayor que cero');
    }
  }
}