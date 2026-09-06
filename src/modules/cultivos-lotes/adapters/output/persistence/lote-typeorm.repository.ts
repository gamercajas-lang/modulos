import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lote } from '../../../domain/entities/lote.entity';
import { LoteRepositoryPort } from '../../../ports/output/lote-repository.port';

@Injectable()
export class LoteTypeOrmRepository implements LoteRepositoryPort {
  constructor(
    @InjectRepository(Lote)
    private readonly repo: Repository<Lote>,
  ) {}

  async create(data: Partial<Lote>): Promise<Lote> {
    const lote = this.repo.create(data);
    return this.repo.save(lote);
  }

  findAll(): Promise<Lote[]> {
    return this.repo.find({ relations: { sublotes: true } });
  }

  findById(id: number): Promise<Lote | null> {
    return this.repo.findOne({
      where: { id },
      relations: { sublotes: true, cultivos: true },
    });
  }

  async update(id: number, data: Partial<Lote>): Promise<Lote | null> {
    const lote = await this.repo.preload({ id, ...data });
    if (!lote) return null;
    return this.repo.save(lote);
  }

  async remove(id: number): Promise<void> {
    await this.repo.softDelete(id); // usa deleted_at (soft delete), tal como está en el modelo
  }
}
