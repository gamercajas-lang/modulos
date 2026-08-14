import { LoteProduccion } from './lote-produccion.model';

export class HistorialPrecioLote {
  constructor(
    public readonly id: number,
    public readonly loteProduccionId: number,
    public readonly precioAnterior: number,
    public readonly precioNuevo: number,
    public readonly fecha: Date,
    public readonly usuarioId?: number,
    public readonly razon?: string,
    public readonly createdAt?: Date,
    public readonly updatedAt?: Date,
    public readonly deletedAt?: Date,
    public readonly loteProduccion?: LoteProduccion,
  ) {}
}
