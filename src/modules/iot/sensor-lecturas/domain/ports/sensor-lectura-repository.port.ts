import { SensorLectura } from '../entities/sensor-lectura.entity';

export interface SensorLecturaRepositoryPort {
  save(lectura: SensorLectura): Promise<SensorLectura>;
  findById(id: number): Promise<SensorLectura | null>;
  findAll(): Promise<SensorLectura[]>;
  findBySensorId(sensorId: number): Promise<SensorLectura[]>;
  delete(id: number): Promise<void>;
}

export const SENSOR_LECTURA_REPOSITORY = Symbol('SENSOR_LECTURA_REPOSITORY');
