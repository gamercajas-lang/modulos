import { CreateProveedorDto } from '../../application/dto/create-proveedor.dto';
import { UpdateProveedorDto } from '../../application/dto/update-proveedor.dto';
import { Proveedor } from '../../domain/entities/proveedor.entity';

export interface ProveedorInputPort {
  create(createProveedorDto: CreateProveedorDto): Promise<Proveedor>;
  findAll(): Promise<Proveedor[]>;
  findOne(id: number): Promise<Proveedor | null>;
  update(id: number, updateProveedorDto: UpdateProveedorDto): Promise<Proveedor>;
  remove(id: number): Promise<void>;
}