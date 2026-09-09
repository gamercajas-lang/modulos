import { CreateMovimientoInsumoDto } from '../../application/dto/create-movimiento-insumo.dto';
import { UpdateMovimientoInsumoDto } from '../../application/dto/update-movimiento-insumo.dto';
import { MovimientoInsumo } from '../../domain/entities/movimiento-insumo.entity';

export interface MovimientoInsumoInputPort {
  create(
    createMovimientoInsumoDto: CreateMovimientoInsumoDto,
  ): Promise<MovimientoInsumo>;

  findAll(): Promise<MovimientoInsumo[]>;

  findOne(id: number): Promise<MovimientoInsumo>;

  update(
    id: number,
    updateMovimientoInsumoDto: UpdateMovimientoInsumoDto,
  ): Promise<MovimientoInsumo>;

  delete(id: number): Promise<void>;
}