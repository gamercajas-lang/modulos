import { CreateActividadInsumoUsoDto } from '../../application/dto/create-actividad-insumo-uso.dto';
import { UpdateActividadInsumoUsoDto } from '../../application/dto/update-actividad-insumo-uso.dto';
import { ActividadInsumoUso } from '../../domain/entities/actividad-insumo-uso.entity';

export interface ActividadInsumoUsoInputPort {
  create(
    createActividadInsumoUsoDto: CreateActividadInsumoUsoDto,
  ): Promise<ActividadInsumoUso>;

  findAll(): Promise<ActividadInsumoUso[]>;

  findOne(id: number): Promise<ActividadInsumoUso>;

  update(
    id: number,
    updateActividadInsumoUsoDto: UpdateActividadInsumoUsoDto,
  ): Promise<ActividadInsumoUso>;

  delete(id: number): Promise<void>;
}