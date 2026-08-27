import { Actividad } from './actividad.entity';
export declare class ActividadHerramienta {
    id: number;
    actividadId: number;
    activoFijoId: number;
    horasEstimadas: number | null;
    actividad: Actividad;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
