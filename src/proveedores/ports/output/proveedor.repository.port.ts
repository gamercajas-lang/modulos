import { Proveedor } from '../../domain/entities/proveedor.entity';

export interface ProveedorRepositoryPort {
  create(proveedor: Proveedor): Promise<Proveedor>;
  findAll(): Promise<Proveedor[]>;
  findById(id: number): Promise<Proveedor | null>;
  update(id: number, proveedor: Partial<Proveedor>): Promise<Proveedor>;
  delete(id: number): Promise<void>;
}