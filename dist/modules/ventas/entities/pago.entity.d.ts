import { Venta } from './venta.entity';
export declare class Pago {
    id: number;
    ventaId: number;
    metodo: string;
    monto: number;
    moneda: string;
    referencia: string | null;
    venta: Venta;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
