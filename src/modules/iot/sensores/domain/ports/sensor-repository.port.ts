import { Sensor } from '../entities/sensor.entity';

export interface SensorRepositoryPort {
  save(sensor: Sensor): Promise<Sensor>;
  findById(id: number): Promise<Sensor | null>;
  findAll(): Promise<Sensor[]>;
  update(id: number, sensor: Partial<Sensor>): Promise<Sensor | null>;
  delete(id: number): Promise<void>;
}

export const SENSOR_REPOSITORY = Symbol('SENSOR_REPOSITORY');
