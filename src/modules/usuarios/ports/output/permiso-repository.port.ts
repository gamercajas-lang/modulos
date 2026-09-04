import { Permiso } from '../../domain/entities/permiso.entity';

export interface PermisoRepositoryPort {
  create(data: Partial<Permiso>): Promise<Permiso>;
  findAll(): Promise<Permiso[]>;
  findById(id: number): Promise<Permiso | null>;
  update(id: number, data: Partial<Permiso>): Promise<Permiso | null>;
  remove(id: number): Promise<void>;
}

export const PERMISO_REPOSITORY = 'PERMISO_REPOSITORY';
