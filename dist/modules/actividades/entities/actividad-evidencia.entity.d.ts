import { Actividad } from './actividad.entity';
export declare class ActividadEvidencia {
    id: number;
    actividadId: number;
    descripcion: string | null;
    imagenes: string | null;
    actividad: Actividad;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
