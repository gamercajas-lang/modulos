import { Rol } from '../../domain/entities/rol.entity';

export interface RolRepositoryPort {
  create(data: Partial<Rol>): Promise<Rol>;
  findAll(): Promise<Rol[]>;
  findById(id: number): Promise<Rol | null>;
  update(id: number, data: Partial<Rol>): Promise<Rol | null>;
  remove(id: number): Promise<void>;
}

export const ROL_REPOSITORY = 'ROL_REPOSITORY';
