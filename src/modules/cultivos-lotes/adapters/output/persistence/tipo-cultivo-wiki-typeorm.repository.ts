import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoCultivoWiki } from '../../../domain/entities/tipo-cultivo-wiki.entity';
import { TipoCultivoWikiRepositoryPort } from '../../../ports/output/tipo-cultivo-wiki-repository.port';

@Injectable()
export class TipoCultivoWikiTypeOrmRepository implements TipoCultivoWikiRepositoryPort {
  constructor(
    @InjectRepository(TipoCultivoWiki)
    private readonly repo: Repository<TipoCultivoWiki>,
  ) {}

  async create(data: Partial<TipoCultivoWiki>): Promise<TipoCultivoWiki> {
    const tipoCultivoWiki = this.repo.create(data);
    return this.repo.save(tipoCultivoWiki);
  }

  findAll(): Promise<TipoCultivoWiki[]> {
    return this.repo.find();
  }

  findById(id: number): Promise<TipoCultivoWiki | null> {
    return this.repo.findOne({ where: { id } });
  }

  async update(id: number, data: Partial<TipoCultivoWiki>): Promise<TipoCultivoWiki | null> {
    const tipoCultivoWiki = await this.repo.preload({ id, ...data });
    if (!tipoCultivoWiki) return null;
    return this.repo.save(tipoCultivoWiki);
  }

  async remove(id: number): Promise<void> {
    await this.repo.softDelete(id); // usa deleted_at (soft delete), tal como está en el modelo
  }
}
