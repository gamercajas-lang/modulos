import { Categoria } from '../../../domain/models/categoria.model';
import { CategoriaEntity } from '../entities/categoria.entity';

export class CategoriaMapper {
  static toDomain(entity: CategoriaEntity | null | undefined): Categoria | null {
    if (!entity) return null;
    return new Categoria(
      entity.id,
      entity.nombre,
      entity.descripcion,
      entity.tipoInsumo,
      entity.createdAt,
      entity.updatedAt,
      entity.deletedAt,
    );
  }

  static toPersistence(model: Partial<Categoria> | null | undefined): CategoriaEntity | null {
    if (!model) return null;
    const entity = new CategoriaEntity();
    if (model.id !== undefined) entity.id = model.id;
    if (model.nombre !== undefined) entity.nombre = model.nombre;
    if (model.descripcion !== undefined) entity.descripcion = model.descripcion;
    if (model.tipoInsumo !== undefined) entity.tipoInsumo = model.tipoInsumo;
    return entity;
  }
}
