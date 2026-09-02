import { MovimientoInsumo } from '../../domain/entities/movimiento-insumo.entity';

export interface MovimientoInsumoRepositoryPort {
  create(
    movimientoInsumo: MovimientoInsumo,
  ): Promise<MovimientoInsumo>;

  findAll(): Promise<MovimientoInsumo[]>;

  findById(id: number): Promise<MovimientoInsumo | null>;

  update(
    id: number,
    movimientoInsumo: Partial<MovimientoInsumo>,
  ): Promise<MovimientoInsumo>;

  delete(id: number): Promise<void>;
}