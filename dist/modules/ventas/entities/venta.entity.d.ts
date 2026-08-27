import { VentaDetalle } from './venta-detalle.entity';
import { Pago } from './pago.entity';
import { Factura } from './factura.entity';
export declare class Venta {
    id: number;
    fecha: Date;
    clienteId: number;
    subtotal: number;
    impuestos: number;
    descuento: number;
    total: number;
    estado: string;
    usuarioId: number;
    anuladaPorUsuarioId: number | null;
    fechaAnulacion: Date | null;
    detalles: VentaDetalle[];
    pagos: Pago[];
    facturas: Factura[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
