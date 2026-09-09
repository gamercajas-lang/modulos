import { CreateActividadInsumoReservaDto } from '../../application/dto/create-actividad-insumo-reserva.dto';
import { UpdateActividadInsumoReservaDto } from '../../application/dto/update-actividad-insumo-reserva.dto';
import { ActividadInsumoReserva } from '../../domain/entities/actividad-insumo-reserva.entity';

export interface ActividadInsumoReservaInputPort {
  create(
    createActividadInsumoReservaDto: CreateActividadInsumoReservaDto,
  ): Promise<ActividadInsumoReserva>;

  findAll(): Promise<ActividadInsumoReserva[]>;

  findOne(id: number): Promise<ActividadInsumoReserva>;

  update(
    id: number,
    updateActividadInsumoReservaDto: UpdateActividadInsumoReservaDto,
  ): Promise<ActividadInsumoReserva>;

  delete(id: number): Promise<void>;
}