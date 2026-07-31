import { Injectable } from '@nestjs/common';

import { ActividadInsumoUso } from '../entities/actividad-insumo-uso.entity';

@Injectable()
export class ActividadInsumoUsoDomainService {
  validarCantidad(actividadInsumoUso: ActividadInsumoUso): void {
    if (actividadInsumoUso.cantidadUsada <= 0) {
      throw new Error('La cantidad usada debe ser mayor que cero');
    }
  }
}