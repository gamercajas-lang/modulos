import { Usuario } from '../../domain/entities/usuario.entity';

export interface UsuarioRepositoryPort {
  create(data: Partial<Usuario>): Promise<Usuario>;
  findAll(): Promise<Usuario[]>;
  findById(id: number): Promise<Usuario | null>;
  findByCorreo(correo: string): Promise<Usuario | null>;
  update(id: number, data: Partial<Usuario>): Promise<Usuario | null>;
  remove(id: number): Promise<void>;
}

export const USUARIO_REPOSITORY = 'USUARIO_REPOSITORY';
