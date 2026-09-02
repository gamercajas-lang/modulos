import { ActividadInsumoUso } from '../../domain/entities/actividad-insumo-uso.entity';

export interface ActividadInsumoUsoRepositoryPort {
  create(
    actividadInsumoUso: ActividadInsumoUso,
  ): Promise<ActividadInsumoUso>;

  findAll(): Promise<ActividadInsumoUso[]>;

  findById(id: number): Promise<ActividadInsumoUso | null>;

  update(
    id: number,
    actividadInsumoUso: Partial<ActividadInsumoUso>,
  ): Promise<ActividadInsumoUso>;

  delete(id: number): Promise<void>;
}