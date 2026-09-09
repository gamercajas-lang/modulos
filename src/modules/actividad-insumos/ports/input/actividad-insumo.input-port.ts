import { CreateActividadInsumoDto } from '../../application/dto/create-actividad-insumo.dto';
import { UpdateActividadInsumoDto } from '../../application/dto/update-actividad-insumo.dto';
import { ActividadInsumo } from '../../domain/entities/actividad-insumo.entity';

export interface ActividadInsumoInputPort {
  create(createActividadInsumoDto: CreateActividadInsumoDto): Promise<ActividadInsumo>;
  findAll(): Promise<ActividadInsumo[]>;
  findOne(id: number): Promise<ActividadInsumo>;
  update(id: number, updateActividadInsumoDto: UpdateActividadInsumoDto): Promise<ActividadInsumo>;
  delete(id: number): Promise<void>;
}