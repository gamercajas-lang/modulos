import { ProductoAgro } from './producto-agro.model';

export class LoteProduccion {
  constructor(
    public readonly id: number,
    public readonly productoAgroId: number,
    public readonly cultivoId: number,
    public readonly loteId: number,
    public readonly subLoteId: number,
    public readonly actividadCosechaId: number,
    public readonly calidad?: string,
    public readonly cantidadKg?: number,
    public readonly stockDisponibleKg?: number,
    public readonly costoUnitarioKg?: number,
    public readonly costoTotal?: number,
    public readonly precioSugeridoKg?: number,
    public readonly createdAt?: Date,
    public readonly updatedAt?: Date,
    public readonly deletedAt?: Date,
    public readonly productoAgro?: ProductoAgro,
  ) {}
}
