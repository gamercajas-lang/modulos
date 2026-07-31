import { ActividadInsumoReserva } from '../../domain/entities/actividad-insumo-reserva.entity';

export interface ActividadInsumoReservaRepositoryPort {
  create(
    actividadInsumoReserva: ActividadInsumoReserva,
  ): Promise<ActividadInsumoReserva>;

  findAll(): Promise<ActividadInsumoReserva[]>;

  findById(id: number): Promise<ActividadInsumoReserva | null>;

  update(
    id: number,
    actividadInsumoReserva: Partial<ActividadInsumoReserva>,
  ): Promise<ActividadInsumoReserva>;

  delete(id: number): Promise<void>;
}