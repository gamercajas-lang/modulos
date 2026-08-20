import { TipoSensor } from '../entities/tipo-sensor.entity';

export interface TipoSensorRepositoryPort {
  save(tipo: TipoSensor): Promise<TipoSensor>;
  findById(id: number): Promise<TipoSensor | null>;
  findAll(): Promise<TipoSensor[]>;
  update(id: number, tipo: Partial<TipoSensor>): Promise<TipoSensor | null>;
  delete(id: number): Promise<void>;
}

export const TIPO_SENSOR_REPOSITORY = Symbol('TIPO_SENSOR_REPOSITORY');