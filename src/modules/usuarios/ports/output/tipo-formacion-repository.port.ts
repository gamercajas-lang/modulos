import { TipoFormacion } from '../../domain/entities/tipo-formacion.entity';

export interface TipoFormacionRepositoryPort {
  create(data: Partial<TipoFormacion>): Promise<TipoFormacion>;
  findAll(): Promise<TipoFormacion[]>;
  findById(id: number): Promise<TipoFormacion | null>;
  update(id: number, data: Partial<TipoFormacion>): Promise<TipoFormacion | null>;
  remove(id: number): Promise<void>;
}

export const TIPO_FORMACION_REPOSITORY = 'TIPO_FORMACION_REPOSITORY';
