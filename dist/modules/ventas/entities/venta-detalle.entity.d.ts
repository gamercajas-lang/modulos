import { Venta } from './venta.entity';
export declare class VentaDetalle {
    id: number;
    ventaId: number;
    productoAgroId: number;
    loteProduccionId: number | null;
    cultivoId: number | null;
    cantidadKg: number;
    precioUnitarioKg: number;
    precioTotal: number;
    costoUnitarioKg: number;
    costoTotal: number;
    venta: Venta;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
