import { ProductoAgro } from '../../../domain/models/producto-agro.model';
import { ProductoAgroEntity } from '../entities/producto-agro.entity';

export class ProductoAgroMapper {
  static toDomain(entity: ProductoAgroEntity | null | undefined): ProductoAgro | null {
    if (!entity) return null;
    return new ProductoAgro(
      entity.id,
      entity.nombre,
      entity.unidadBase,
      entity.descripcion,
      entity.imagen,
      entity.createdAt,
      entity.updatedAt,
      entity.deletedAt,
    );
  }

  static toPersistence(model: Partial<ProductoAgro> | null | undefined): ProductoAgroEntity | null {
    if (!model) return null;
    const entity = new ProductoAgroEntity();
    if (model.id !== undefined) entity.id = model.id;
    if (model.nombre !== undefined) entity.nombre = model.nombre;
    if (model.unidadBase !== undefined) entity.unidadBase = model.unidadBase;
    if (model.descripcion !== undefined) entity.descripcion = model.descripcion;
    if (model.imagen !== undefined) entity.imagen = model.imagen;
    return entity;
  }
}
