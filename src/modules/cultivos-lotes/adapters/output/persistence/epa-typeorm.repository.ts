import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Epa } from '../../../domain/entities/epa.entity';
import { EpaRepositoryPort } from '../../../ports/output/epa-repository.port';

@Injectable()
export class EpaTypeOrmRepository implements EpaRepositoryPort {
  constructor(
    @InjectRepository(Epa)
    private readonly repo: Repository<Epa>,
  ) {}

  async create(data: Partial<Epa>): Promise<Epa> {
    const epa = this.repo.create(data);
    return this.repo.save(epa);
  }

  findAll(): Promise<Epa[]> {
    return this.repo.find({ relations: { tiposCultivosWiki: true } });
  }

  findById(id: number): Promise<Epa | null> {
    return this.repo.findOne({
      where: { id },
      relations: { tiposCultivosWiki: true },
    });
  }

  async update(id: number, data: Partial<Epa>): Promise<Epa | null> {
    const epa = await this.repo.preload({ id, ...data });
    if (!epa) return null;
    return this.repo.save(epa);
  }

  async remove(id: number): Promise<void> {
    await this.repo.softDelete(id); // usa deleted_at (soft delete), tal como está en el modelo
  }
}
