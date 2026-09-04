import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProgramaFormacion } from '../../../domain/entities/programa-formacion.entity';
import { ProgramaFormacionRepositoryPort } from '../../../ports/output/programa-formacion-repository.port';
import { ProgramaFormacionOrmEntity } from './entities/programa-formacion-orm.entity';

@Injectable()
export class ProgramaFormacionTypeOrmRepository implements ProgramaFormacionRepositoryPort {
  constructor(
    @InjectRepository(ProgramaFormacionOrmEntity)
    private readonly repo: Repository<ProgramaFormacionOrmEntity>,
  ) {}

  private toDomain(orm: ProgramaFormacionOrmEntity): ProgramaFormacion {
    return new ProgramaFormacion({
      id: orm.id,
      numeroFicha: orm.numeroFicha,
      nombre: orm.nombre,
      tipo: orm.tipo,
      descripcion: orm.descripcion,
      fechaInicio: orm.fechaInicio,
      fechaFin: orm.fechaFin,
      estado: orm.estado,
      cantidadAprendices: orm.cantidadAprendices,
      createdAt: orm.createdAt,
      updatedAt: orm.updatedAt,
      deletedAt: orm.deletedAt,
    });
  }

  async create(data: Partial<ProgramaFormacion>): Promise<ProgramaFormacion> {
    const orm = this.repo.create(data as Partial<ProgramaFormacionOrmEntity>);
    const saved = await this.repo.save(orm);
    return this.toDomain(saved);
  }

  async findAll(): Promise<ProgramaFormacion[]> {
    const rows = await this.repo.find();
    return rows.map((row) => this.toDomain(row));
  }

  async findById(id: number): Promise<ProgramaFormacion | null> {
    const row = await this.repo.findOne({ where: { id } });
    return row ? this.toDomain(row) : null;
  }

  async update(id: number, data: Partial<ProgramaFormacion>): Promise<ProgramaFormacion | null> {
    const preloaded = await this.repo.preload({
      id,
      ...(data as Partial<ProgramaFormacionOrmEntity>),
    });
    if (!preloaded) return null;
    const saved = await this.repo.save(preloaded);
    return this.toDomain(saved);
  }

  async remove(id: number): Promise<void> {
    await this.repo.softDelete(id);
  }
}
