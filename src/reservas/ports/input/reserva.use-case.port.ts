import { CreateReservaDto } from '../../application/dto/create-reserva.dto';
import { UpdateReservaDto } from '../../application/dto/update-reserva.dto';
import { Reserva } from '../../domain/entities/reserva.entity';

export interface ReservaUseCasePort {
  create(dto: CreateReservaDto): Promise<Reserva>;
  findAll(): Promise<Reserva[]>;
  findOne(id: number): Promise<Reserva>;
  update(id: number, dto: UpdateReservaDto): Promise<Reserva>;
  delete(id: number): Promise<void>;
}