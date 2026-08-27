import { Actividad } from './actividad.entity';
export declare class TransaccionFinanciera {
    id: number;
    tipo: string;
    categoria: string;
    monto: number;
    descripcion: string | null;
    fecha: Date;
    actividadId: number | null;
    insumoId: number | null;
    ventaId: number | null;
    usuarioId: number | null;
    actividad: Actividad | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
