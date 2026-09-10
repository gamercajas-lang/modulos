import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IotGlobalConfig } from '../../domain/entities/iot-global-config.entity';
import { IotGlobalConfigRepositoryPort } from '../../domain/ports/iot-global-config-repository.port';
import { IotGlobalConfigOrmEntity } from './iot-global-config.orm-entity';

@Injectable()
export class IotGlobalConfigTypeOrmRepository implements IotGlobalConfigRepositoryPort {
  constructor(
    @InjectRepository(IotGlobalConfigOrmEntity)
    private readonly repo: Repository<IotGlobalConfigOrmEntity>,
  ) {}

  private toDomain(orm: IotGlobalConfigOrmEntity): IotGlobalConfig {
    return new IotGlobalConfig(
      orm.id,
      orm.nombre,
      orm.agente,
      orm.puerto,
      orm.protocolo as any,
      orm.prefijoTema,
      orm.loteId,
      orm.subLoteId,
      orm.activo,
      orm.autoDiscover,
      orm.sensoresPredeterminadosInicializados,
      orm.temasPredeterminados,
      orm.temasPersonalizados,
      orm.nombreUsuario,
      orm.contrasena,
    );
  }

  async save(config: IotGlobalConfig): Promise<IotGlobalConfig> {
    const orm = this.repo.create({
      nombre: config.nombre,
      agente: config.agente,
      puerto: config.puerto,
      protocolo: config.protocolo,
      prefijoTema: config.prefijoTema,
      temasPredeterminados: config.temasPredeterminados ?? undefined,
      temasPersonalizados: config.temasPersonalizados ?? undefined,
      loteId: config.loteId ?? undefined,
      subLoteId: config.subLoteId ?? undefined,
      nombreUsuario: config.nombreUsuario ?? undefined,
      contrasena: config.contrasena ?? undefined,
      activo: config.activo,
      autoDiscover: config.autoDiscover,
      sensoresPredeterminadosInicializados: config.sensoresPredeterminadosInicializados,
    });
    const saved = await this.repo.save(orm);
    return this.toDomain(saved);
  }

  async findById(id: number): Promise<IotGlobalConfig | null> {
    const orm = await this.repo.findOneBy({ id });
    return orm ? this.toDomain(orm) : null;
  }

  async findAll(): Promise<IotGlobalConfig[]> {
    const all = await this.repo.find();
    return all.map((orm) => this.toDomain(orm));
  }

  async update(id: number, config: Partial<IotGlobalConfig>): Promise<IotGlobalConfig | null> {
    await this.repo.update(id, config as any);
    return this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.repo.softDelete(id);
  }
}
