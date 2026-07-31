import { Notificacion } from '../../domain/entities/notificacion.entity';

export interface NotificacionRepositoryPort {
  create(data: Partial<Notificacion>): Promise<Notificacion>;
  findAll(): Promise<Notificacion[]>;
  findById(id: number): Promise<Notificacion | null>;
  update(id: number, data: Partial<Notificacion>): Promise<Notificacion | null>;
  remove(id: number): Promise<void>;
}

export const NOTIFICACION_REPOSITORY = 'NOTIFICACION_REPOSITORY';
