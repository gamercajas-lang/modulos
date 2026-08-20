import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SensorAlerta } from '../../domain/entities/sensor-alerta.entity';
import { SensorAlertaRepositoryPort } from '../../domain/ports/sensor-alerta-repository.port';
import { SensorAlertaOrmEntity } from './sensor-alerta.orm-entity';

@Injectable()
export class SensorAlertaTypeOrmRepository implements SensorAlertaRepositoryPort {
  constructor(
    @InjectRepository(SensorAlertaOrmEntity)
    private readonly repo: Repository<SensorAlertaOrmEntity>,
  ) {}

  private toDomain(orm: SensorAlertaOrmEntity): SensorAlerta {
    return new SensorAlerta(
      orm.id,
      orm.sensorId,
      orm.loteId,
      orm.subLoteId,
      orm.tipo,
      orm.valor,
      orm.umbral,
      orm.fechaAlerta,
    );
  }

  async save(alerta: SensorAlerta): Promise<SensorAlerta> {
    const orm = this.repo.create({
      sensorId: alerta.sensorId,
      loteId: alerta.loteId ?? undefined,
      subLoteId: alerta.subLoteId ?? undefined,
      tipo: alerta.tipo,
      valor: alerta.valor,
      umbral: alerta.umbral,
      fechaAlerta: alerta.fechaAlerta,
    });
    const saved = await this.repo.save(orm);
    return this.toDomain(saved);
  }

  async findById(id: number): Promise<SensorAlerta | null> {
    const orm = await this.repo.findOneBy({ id });
    return orm ? this.toDomain(orm) : null;
  }

  async findAll(): Promise<SensorAlerta[]> {
    const all = await this.repo.find();
    return all.map((orm) => this.toDomain(orm));
  }

  async update(id: number, alerta: Partial<SensorAlerta>): Promise<SensorAlerta | null> {
    await this.repo.update(id, alerta as any);
    return this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.repo.softDelete(id);
  }
}
