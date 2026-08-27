import { Actividad } from './actividad.entity';
export declare class ActividadHistorial {
    id: number;
    actividadId: number;
    usuarioId: number;
    motivo: string | null;
    cambios: Record<string, unknown> | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    actividad: Actividad;
}
