import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WikiTipoEpa } from '../../../domain/entities/wiki-tipo-epa.entity';
import { WikiTipoEpaRepositoryPort } from '../../../ports/output/wiki-tipo-epa-repository.port';

@Injectable()
export class WikiTipoEpaTypeOrmRepository implements WikiTipoEpaRepositoryPort {
  constructor(
    @InjectRepository(WikiTipoEpa)
    private readonly repo: Repository<WikiTipoEpa>,
  ) {}

  async create(data: Partial<WikiTipoEpa>): Promise<WikiTipoEpa> {
    const wikiTipoEpa = this.repo.create(data);
    return this.repo.save(wikiTipoEpa);
  }

  findAll(): Promise<WikiTipoEpa[]> {
    return this.repo.find();
  }

  findById(id: number): Promise<WikiTipoEpa | null> {
    return this.repo.findOne({ where: { id } });
  }

  async update(id: number, data: Partial<WikiTipoEpa>): Promise<WikiTipoEpa | null> {
    const wikiTipoEpa = await this.repo.preload({ id, ...data });
    if (!wikiTipoEpa) return null;
    return this.repo.save(wikiTipoEpa);
  }

  async remove(id: number): Promise<void> {
    await this.repo.softDelete(id); // usa deleted_at (soft delete), tal como está en el modelo
  }
}
