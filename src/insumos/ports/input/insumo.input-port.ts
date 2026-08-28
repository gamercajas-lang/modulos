import { CreateInsumoDto } from '../../application/dto/create-insumo.dto';
import { UpdateInsumoDto } from '../../application/dto/update-insumo.dto';
import { Insumo } from '../../domain/entities/insumo.entity';

export interface InsumoInputPort {
  create(createInsumoDto: CreateInsumoDto): Promise<Insumo>;
  findAll(): Promise<Insumo[]>;
  findOne(id: number): Promise<Insumo | null>;
  update(id: number, updateInsumoDto: UpdateInsumoDto): Promise<Insumo>;
  remove(id: number): Promise<void>;
}
