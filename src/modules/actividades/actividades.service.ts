import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Actividad } from './entities/actividad.entity';
import { ActividadHistorial } from './entities/actividad-historial.entity';
import { ActividadResponsable } from './entities/actividad-responsable.entity';
import { ActividadServicio } from './entities/actividad-servicio.entity';
import { ActividadHerramienta } from './entities/actividad-herramienta.entity';
import { ActividadEvidencia } from './entities/actividad-evidencia.entity';
import { UsoHerramienta } from './entities/uso-herramienta.entity';
import { TransaccionFinanciera } from './entities/transaccion-financiera.entity';

@Injectable()
export class ActividadesService {
  constructor(
    @InjectRepository(Actividad) private readonly actividades: Repository<Actividad>,
    @InjectRepository(ActividadHistorial) private readonly historial: Repository<ActividadHistorial>,
    @InjectRepository(ActividadResponsable) private readonly responsables: Repository<ActividadResponsable>,
    @InjectRepository(ActividadServicio) private readonly servicios: Repository<ActividadServicio>,
    @InjectRepository(ActividadHerramienta) private readonly herramientas: Repository<ActividadHerramienta>,
    @InjectRepository(ActividadEvidencia) private readonly evidencias: Repository<ActividadEvidencia>,
    @InjectRepository(UsoHerramienta) private readonly usos: Repository<UsoHerramienta>,
    @InjectRepository(TransaccionFinanciera) private readonly transacciones: Repository<TransaccionFinanciera>,
  ) {}

  async findAll() {
    return this.actividades.find({
      relations: ['historial', 'responsables', 'servicios', 'herramientas', 'evidencias', 'usosHerramientas', 'transaccionesFinancieras'],
    });
  }

  async findOne(id: number) {
    const item = await this.actividades.findOne({
      where: { id },
      relations: ['historial', 'responsables', 'servicios', 'herramientas', 'evidencias', 'usosHerramientas', 'transaccionesFinancieras'],
    });
    if (!item) throw new NotFoundException(`Actividad ${id} no encontrada`);
    return item;
  }

  async create(data: Partial<Actividad>) {
    return this.actividades.save(this.actividades.create(data));
  }

  async update(id: number, data: Partial<Actividad>) {
    await this.findOne(id);
    return this.actividades.save({ id, ...data });
  }

  async remove(id: number) {
    const item = await this.findOne(id);
    await this.actividades.softRemove(item);
    return { message: 'Actividad eliminada', id };
  }

  // TypeORM Repository<T> es genérico. Al seleccionar repositorios de
  // diferentes entidades por una clave dinámica, TypeScript produce una
  // unión incompatible. Aquí se centraliza el cast para mantener el CRUD
  // dinámico sin duplicar siete métodos idénticos.
  private repoMap(): Record<string, Repository<any>> {
    return {
      historial: this.historial,
      responsables: this.responsables,
      servicios: this.servicios,
      herramientas: this.herramientas,
      evidencias: this.evidencias,
      usos: this.usos,
      transacciones: this.transacciones,
    };
  }

  async children(kind: string) {
    return this.repoMap()[kind].find();
  }

  async child(kind: string, id: number) {
    const item = await this.repoMap()[kind].findOne({ where: { id } });
    if (!item) throw new NotFoundException(`${kind} ${id} no encontrado`);
    return item;
  }

  async createChild(kind: string, data: any) {
    return this.repoMap()[kind].save(data);
  }

  async updateChild(kind: string, id: number, data: any) {
    await this.child(kind, id);
    return this.repoMap()[kind].save({ id, ...data });
  }

  async removeChild(kind: string, id: number) {
    const item = await this.child(kind, id);
    await this.repoMap()[kind].softRemove(item);
    return { message: 'Registro eliminado', id };
  }
}
