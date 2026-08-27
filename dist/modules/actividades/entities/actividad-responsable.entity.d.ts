import { Actividad } from './actividad.entity';
export declare class ActividadResponsable {
    id: number;
    actividadId: number;
    usuarioId: number;
    horas: number | null;
    precioHora: number | null;
    costo: number | null;
    actividad: Actividad;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
