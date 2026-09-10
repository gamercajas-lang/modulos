import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoSensor } from '../../domain/entities/tipo-sensor.entity';
import { TipoSensorRepositoryPort } from '../../domain/ports/tipo-sensor-repository.port';
import { TipoSensorOrmEntity } from './tipo-sensor.orm-entity';

@Injectable()
export class TipoSensorTypeOrmRepository implements TipoSensorRepositoryPort {
  constructor(
    @InjectRepository(TipoSensorOrmEntity)
    private readonly repo: Repository<TipoSensorOrmEntity>,
  ) {}

  private toDomain(orm: TipoSensorOrmEntity): TipoSensor {
    return new TipoSensor(
      orm.id,
      orm.nombre,
      orm.unidad,
      orm.decimales,
      orm.descripcion,
      orm.imagen,
      orm.ttlMinutos,
    );
  }

  async save(tipo: TipoSensor): Promise<TipoSensor> {
    const orm = this.repo.create({
      nombre: tipo.nombre,
      unidad: tipo.unidad,
      decimales: tipo.decimales,
      descripcion: tipo.descripcion ?? undefined,
      imagen: tipo.imagen ?? undefined,
      ttlMinutos: tipo.ttlMinutos,
    });
    const saved = await this.repo.save(orm);
    return this.toDomain(saved);
  }

  async findById(id: number): Promise<TipoSensor | null> {
    const orm = await this.repo.findOneBy({ id });
    return orm ? this.toDomain(orm) : null;
  }

  async findAll(): Promise<TipoSensor[]> {
    const all = await this.repo.find();
    return all.map((orm) => this.toDomain(orm));
  }

  async update(id: number, tipo: Partial<TipoSensor>): Promise<TipoSensor | null> {
    await this.repo.update(id, tipo as any);
    return this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.repo.softDelete(id);
  }
}