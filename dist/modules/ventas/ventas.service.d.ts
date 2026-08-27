import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';
import { Venta } from './entities/venta.entity';
import { VentaDetalle } from './entities/venta-detalle.entity';
import { Pago } from './entities/pago.entity';
import { Factura } from './entities/factura.entity';
export declare class VentasService {
    private readonly clientes;
    private readonly ventas;
    private readonly detalles;
    private readonly pagos;
    private readonly facturas;
    constructor(clientes: Repository<Cliente>, ventas: Repository<Venta>, detalles: Repository<VentaDetalle>, pagos: Repository<Pago>, facturas: Repository<Factura>);
    clientesAll(): Promise<Cliente[]>;
    clientesOne(id: number): Promise<Cliente>;
    clientesCreate(data: any): Promise<Cliente[]>;
    clientesUpdate(id: number, data: any): Promise<any>;
    clientesRemove(id: number): Promise<{
        message: string;
        id: number;
    }>;
    ventasAll(): Promise<Venta[]>;
    ventasOne(id: number): Promise<Venta>;
    ventasCreate(data: any): Promise<Venta[]>;
    ventasUpdate(id: number, data: any): Promise<any>;
    ventasRemove(id: number): Promise<{
        message: string;
        id: number;
    }>;
    private map;
    childAll(k: string): Promise<any[]>;
    childOne(k: string, id: number): Promise<any>;
    childCreate(k: string, data: any): Promise<any>;
    childUpdate(k: string, id: number, data: any): Promise<any>;
    childRemove(k: string, id: number): Promise<{
        message: string;
        id: number;
    }>;
}
