import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SensorLectura } from '../../domain/entities/sensor-lectura.entity';
import { SensorLecturaRepositoryPort } from '../../domain/ports/sensor-lectura-repository.port';
import { SensorLecturaOrmEntity } from './sensor-lectura.orm-entity';

@Injectable()
export class SensorLecturaTypeOrmRepository implements SensorLecturaRepositoryPort {
  constructor(
    @InjectRepository(SensorLecturaOrmEntity)
    private readonly repo: Repository<SensorLecturaOrmEntity>,
  ) {}

  private toDomain(orm: SensorLecturaOrmEntity): SensorLectura {
    return new SensorLectura(orm.id, orm.sensorId, orm.valor, orm.fechaLectura, orm.unidad, orm.observaciones);
  }

  async save(lectura: SensorLectura): Promise<SensorLectura> {
    const orm = this.repo.create({
      sensorId: lectura.sensorId,
      valor: lectura.valor,
      fechaLectura: lectura.fechaLectura,
      unidad: lectura.unidad ?? undefined,
      observaciones: lectura.observaciones ?? undefined,
    });
    const saved = await this.repo.save(orm);
    return this.toDomain(saved);
  }

  async findById(id: number): Promise<SensorLectura | null> {
    const orm = await this.repo.findOneBy({ id });
    return orm ? this.toDomain(orm) : null;
  }

  async findAll(): Promise<SensorLectura[]> {
    const all = await this.repo.find();
    return all.map((orm) => this.toDomain(orm));
  }

  async findBySensorId(sensorId: number): Promise<SensorLectura[]> {
    const all = await this.repo.findBy({ sensorId });
    return all.map((orm) => this.toDomain(orm));
  }

  async delete(id: number): Promise<void> {
    await this.repo.softDelete(id);
  }
}
