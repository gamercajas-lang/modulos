import { ActividadesService } from './actividades.service';
export declare class ActividadesController {
    private readonly service;
    constructor(service: ActividadesService);
    findAll(): Promise<import("./entities/actividad.entity").Actividad[]>;
    findOne(id: string): Promise<import("./entities/actividad.entity").Actividad>;
    create(body: any): Promise<import("./entities/actividad.entity").Actividad>;
    update(id: string, body: any): Promise<{
        id: number;
        nombre?: string | undefined;
        tipo?: string | undefined;
        subtipo?: string | null | undefined;
        loteId?: number | null | undefined;
        subLoteId?: number | null | undefined;
        cultivoId?: number | null | undefined;
        fecha?: Date | undefined;
        horasActividad?: number | null | undefined;
        precioHoraActividad?: number | null | undefined;
        costoManoObra?: number | null | undefined;
        descripcion?: string | null | undefined;
        estado?: string | undefined;
        creadoPorUsuarioId?: number | null | undefined;
        cantidadPlantas?: number | null | undefined;
        kgRecolectados?: number | null | undefined;
        productoAgroId?: number | null | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        deletedAt?: Date | null | undefined;
        historial?: import("./entities/actividad-historial.entity").ActividadHistorial[] | undefined;
        responsables?: import("./entities/actividad-responsable.entity").ActividadResponsable[] | undefined;
        servicios?: import("./entities/actividad-servicio.entity").ActividadServicio[] | undefined;
        herramientas?: import("./entities/actividad-herramienta.entity").ActividadHerramienta[] | undefined;
        evidencias?: import("./entities/actividad-evidencia.entity").ActividadEvidencia[] | undefined;
        usosHerramientas?: import("./entities/uso-herramienta.entity").UsoHerramienta[] | undefined;
        transaccionesFinancieras?: import("./entities/transaccion-financiera.entity").TransaccionFinanciera[] | undefined;
    } & import("./entities/actividad.entity").Actividad>;
    remove(id: string): Promise<{
        message: string;
        id: number;
    }>;
}
