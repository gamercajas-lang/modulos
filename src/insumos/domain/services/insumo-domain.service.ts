import { Injectable, BadRequestException } from '@nestjs/common';
import { Insumo } from '../entities/insumo.entity';

@Injectable()
export class InsumoDomainService {
  crearInsumo(data: Partial<Insumo>): Insumo {
    const insumo = new Insumo();
    Object.assign(insumo, data);
    insumo.stockPresentacion = data.stockPresentacion ?? 0;
    insumo.stockUso = 0;
    insumo.stockReservado = 0;
    insumo.valorInventario =
      (data.stockPresentacion ?? 0) * (data.precioUnitarioPresentacion ?? 0);
    insumo.fechaRegistro = new Date();
    insumo.estado = data.estado ?? 'ACTIVO';

    return insumo;
  }

  /** ENTRADA suma stock; SALIDA/AJUSTE/TRANSFERENCIA restan. Lanza error si queda negativo. */
  aplicarMovimiento(
    insumo: Insumo,
    tipo: string,
    cantidadPresentacion: number,
    costoUnitarioPresentacion?: number,
  ): Insumo {
    const signo = tipo === 'ENTRADA' ? 1 : -1;
    const nuevoStock = insumo.stockPresentacion + signo * cantidadPresentacion;

    if (nuevoStock < 0) {
      throw new BadRequestException(
        `Stock insuficiente para el insumo ${insumo.id}: disponible ${insumo.stockPresentacion}, solicitado ${cantidadPresentacion}`,
      );
    }

    insumo.stockPresentacion = nuevoStock;

    if (insumo.factorConversionUso) {
      insumo.stockUso = insumo.stockPresentacion * insumo.factorConversionUso;
    }

    if (costoUnitarioPresentacion !== undefined && signo > 0) {
      insumo.precioUnitarioPresentacion = costoUnitarioPresentacion;
    }

    insumo.valorInventario = insumo.stockPresentacion * (insumo.precioUnitarioPresentacion ?? 0);

    return insumo;
  }

  /** Reserva cantidad de un insumo validando contra el disponible (stock - ya reservado). */
  reservar(insumo: Insumo, cantidad: number): Insumo {
    const disponible = insumo.stockPresentacion - insumo.stockReservado;
    if (cantidad > disponible) {
      throw new BadRequestException(
        `No hay suficiente stock disponible para reservar (disponible: ${disponible})`,
      );
    }
    insumo.stockReservado += cantidad;
    return insumo;
  }

  /** Libera una reserva (cancelación) sin afectar el stock físico. */
  liberarReserva(insumo: Insumo, cantidad: number): Insumo {
    insumo.stockReservado = Math.max(0, insumo.stockReservado - cantidad);
    return insumo;
  }
}
