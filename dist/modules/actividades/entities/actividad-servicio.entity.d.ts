import { Actividad } from './actividad.entity';
export declare class ActividadServicio {
    id: number;
    actividadId: number;
    nombreServicio: string;
    horas: number | null;
    precioHora: number | null;
    costo: number | null;
    maquinariaId: number | null;
    actividad: Actividad;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
