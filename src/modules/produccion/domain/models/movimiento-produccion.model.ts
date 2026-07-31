import { LoteProduccion } from './lote-produccion.model';

export class MovimientoProduccion {
  constructor(
    public readonly id: number,
    public readonly loteProduccionId: number,
    public readonly tipo: string,
    public readonly cantidadKg: number,
    public readonly costoUnitarioKg: number,
    public readonly costoTotal: number,
    public readonly ventaId?: number,
    public readonly descripcion?: string,
    public readonly usuarioId?: number,
    public readonly fecha: Date,
    public readonly createdAt?: Date,
    public readonly updatedAt?: Date,
    public readonly deletedAt?: Date,
    public readonly loteProduccion?: LoteProduccion,
  ) {}
}
