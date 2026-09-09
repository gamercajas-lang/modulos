import { ActividadInsumo } from '../../domain/entities/actividad-insumo.entity';

export abstract class ActividadInsumoRepositoryPort {
  abstract create(actividadInsumo: ActividadInsumo): Promise<ActividadInsumo>;

  abstract findAll(): Promise<ActividadInsumo[]>;

  abstract findById(id: number): Promise<ActividadInsumo | null>;

  abstract update(
    id: number,
    actividadInsumo: Partial<ActividadInsumo>,
  ): Promise<ActividadInsumo>;

  abstract delete(id: number): Promise<void>;
}