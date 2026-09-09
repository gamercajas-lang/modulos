import { Reserva } from '../../domain/entities/reserva.entity';

export interface ReservaRepositoryPort {
  create(reserva: Reserva): Promise<Reserva>;
  findAll(): Promise<Reserva[]>;
  findById(id: number): Promise<Reserva | null>;
  update(id: number, reserva: Partial<Reserva>): Promise<Reserva>;
  delete(id: number): Promise<void>;
}