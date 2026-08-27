import { VentasService } from './ventas.service';
export declare class VentasController {
    private readonly service;
    constructor(service: VentasService);
    clientesAll(): Promise<import("./entities/cliente.entity").Cliente[]>;
    clientesOne(id: string): Promise<import("./entities/cliente.entity").Cliente>;
    clientesCreate(b: any): Promise<import("./entities/cliente.entity").Cliente[]>;
    clientesUpdate(id: string, b: any): Promise<any>;
    clientesRemove(id: string): Promise<{
        message: string;
        id: number;
    }>;
    ventasAll(): Promise<import("./entities/venta.entity").Venta[]>;
    ventasOne(id: string): Promise<import("./entities/venta.entity").Venta>;
    ventasCreate(b: any): Promise<import("./entities/venta.entity").Venta[]>;
    ventasUpdate(id: string, b: any): Promise<any>;
    ventasRemove(id: string): Promise<{
        message: string;
        id: number;
    }>;
    detallesAll(): Promise<any[]>;
    detallesOne(id: string): Promise<any>;
    detallesCreate(b: any): Promise<any>;
    detallesUpdate(id: string, b: any): Promise<any>;
    detallesRemove(id: string): Promise<{
        message: string;
        id: number;
    }>;
    pagosAll(): Promise<any[]>;
    pagosOne(id: string): Promise<any>;
    pagosCreate(b: any): Promise<any>;
    pagosUpdate(id: string, b: any): Promise<any>;
    pagosRemove(id: string): Promise<{
        message: string;
        id: number;
    }>;
    facturasAll(): Promise<any[]>;
    facturasOne(id: string): Promise<any>;
    facturasCreate(b: any): Promise<any>;
    facturasUpdate(id: string, b: any): Promise<any>;
    facturasRemove(id: string): Promise<{
        message: string;
        id: number;
    }>;
}
