import { Venta } from './venta.entity';
export declare class Factura {
    id: number;
    ventaId: number;
    numero: string;
    prefijo: string | null;
    fechaEmision: Date;
    vencimiento: Date | null;
    qrUrl: string | null;
    pdfUrl: string | null;
    venta: Venta;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
