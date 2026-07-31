import { ProgramaFormacion } from '../../domain/entities/programa-formacion.entity';

export interface ProgramaFormacionRepositoryPort {
  create(data: Partial<ProgramaFormacion>): Promise<ProgramaFormacion>;
  findAll(): Promise<ProgramaFormacion[]>;
  findById(id: number): Promise<ProgramaFormacion | null>;
  update(id: number, data: Partial<ProgramaFormacion>): Promise<ProgramaFormacion | null>;
  remove(id: number): Promise<void>;
}

export const PROGRAMA_FORMACION_REPOSITORY = 'PROGRAMA_FORMACION_REPOSITORY';
