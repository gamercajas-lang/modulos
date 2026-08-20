import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sensor } from '../../domain/entities/sensor.entity';
import { SensorRepositoryPort } from '../../domain/ports/sensor-repository.port';
import { SensorOrmEntity } from './sensor.orm-entity';

@Injectable()
export class SensorTypeOrmRepository implements SensorRepositoryPort {
  constructor(
    @InjectRepository(SensorOrmEntity)
    private readonly repo: Repository<SensorOrmEntity>,
  ) {}

  private toDomain(orm: SensorOrmEntity): Sensor {
    return new Sensor(
      orm.id,
      orm.nombreSensor,
      orm.tipoSensorId,
      orm.globalConfigId,
      orm.protocolo,
      orm.valorMinimoSensor,
      orm.valorMaximoSensor,
      orm.activo,
      orm.estadoConexion,
      orm.ultimoValor,
      orm.ultimaMedicion,
      orm.lastSeenAt,
      orm.loteId,
      orm.subLoteId,
      orm.cultivoId,
      orm.endpointUrl,
      orm.mqttTopic,
      orm.estado,
      orm.creadoPorUsuarioId,
    );
  }

  async save(sensor: Sensor): Promise<Sensor> {
    const orm = this.repo.create({
      nombreSensor: sensor.nombreSensor,
      tipoSensorId: sensor.tipoSensorId,
      globalConfigId: sensor.globalConfigId,
      protocolo: sensor.protocolo,
      endpointUrl: sensor.endpointUrl ?? undefined,
      mqttTopic: sensor.mqttTopic ?? undefined,
      valorMinimoSensor: sensor.valorMinimoSensor,
      valorMaximoSensor: sensor.valorMaximoSensor,
      activo: sensor.activo,
      estadoConexion: sensor.estadoConexion ?? undefined,
      estado: sensor.estado ?? undefined,
      loteId: sensor.loteId ?? undefined,
      subLoteId: sensor.subLoteId ?? undefined,
      cultivoId: sensor.cultivoId ?? undefined,
      creadoPorUsuarioId: sensor.creadoPorUsuarioId ?? undefined,
    });
    const saved = await this.repo.save(orm);
    return this.toDomain(saved);
  }

  async findById(id: number): Promise<Sensor | null> {
    const orm = await this.repo.findOneBy({ id });
    return orm ? this.toDomain(orm) : null;
  }

  async findAll(): Promise<Sensor[]> {
    const all = await this.repo.find();
    return all.map((orm) => this.toDomain(orm));
  }

  async update(id: number, sensor: Partial<Sensor>): Promise<Sensor | null> {
    await this.repo.update(id, sensor as any);
    return this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.repo.softDelete(id);
  }
}
