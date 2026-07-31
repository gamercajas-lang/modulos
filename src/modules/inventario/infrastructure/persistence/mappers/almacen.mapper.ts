import { Almacen } from '../../../domain/models/almacen.model';
import { AlmacenEntity } from '../entities/almacen.entity';

export class AlmacenMapper {
  static toDomain(entity: AlmacenEntity): Almacen {
    if (!entity) return null;
    return new Almacen(
      entity.id,
      entity.nombre,
      entity.descripcion,
      entity.ubicacion,
      entity.createdAt,
      entity.updatedAt,
      entity.deletedAt,
    );
  }

  static toPersistence(model: Partial<Almacen>): Partial<AlmacenEntity> {
    if (!model) return null;
    const entity = new AlmacenEntity();
    if (model.id !== undefined) entity.id = model.id;
    if (model.nombre !== undefined) entity.nombre = model.nombre;
    if (model.descripcion !== undefined) entity.descripcion = model.descripcion;
    if (model.ubicacion !== undefined) entity.ubicacion = model.ubicacion;
    return entity;
  }
}
