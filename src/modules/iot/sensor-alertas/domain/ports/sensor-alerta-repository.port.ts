import { SensorAlerta } from '../entities/sensor-alerta.entity';

export interface SensorAlertaRepositoryPort {
  save(alerta: SensorAlerta): Promise<SensorAlerta>;
  findById(id: number): Promise<SensorAlerta | null>;
  findAll(): Promise<SensorAlerta[]>;
  update(id: number, alerta: Partial<SensorAlerta>): Promise<SensorAlerta | null>;
  delete(id: number): Promise<void>;
}

export const SENSOR_ALERTA_REPOSITORY = Symbol('SENSOR_ALERTA_REPOSITORY');
