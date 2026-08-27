import { Actividad } from './actividad.entity';
export declare class UsoHerramienta {
    id: number;
    actividadId: number;
    insumoId: number;
    horasUsadas: number;
    depreciacionGenerada: number;
    valorEnLibrosAntes: number;
    valorEnLibrosDespues: number;
    fechaUso: Date;
    actividad: Actividad;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
