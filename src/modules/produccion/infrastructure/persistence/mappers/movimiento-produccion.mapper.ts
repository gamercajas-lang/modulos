import { MovimientoProduccion } from '../../../domain/models/movimiento-produccion.model';
import { MovimientoProduccionEntity } from '../entities/movimiento-produccion.entity';
import { LoteProduccionMapper } from './lote-produccion.mapper';

export class MovimientoProduccionMapper {
  static toDomain(entity: MovimientoProduccionEntity | null | undefined): MovimientoProduccion | null {
    if (!entity) return null;
    return new MovimientoProduccion(
      entity.id,
      entity.loteProduccionId,
      entity.tipo,
      entity.cantidadKg,
      entity.costoUnitarioKg,
      entity.costoTotal,
      entity.fecha,
      entity.ventaId,
      entity.descripcion,
      entity.usuarioId,
      entity.createdAt,
      entity.updatedAt,
      entity.deletedAt,
      entity.loteProduccion ? LoteProduccionMapper.toDomain(entity.loteProduccion) ?? undefined : undefined,
    );
  }

  static toPersistence(model: Partial<MovimientoProduccion> | null | undefined): MovimientoProduccionEntity | null {
    if (!model) return null;
    const entity = new MovimientoProduccionEntity();
    if (model.id !== undefined) entity.id = model.id;
    if (model.loteProduccionId !== undefined) entity.loteProduccionId = model.loteProduccionId;
    if (model.tipo !== undefined) entity.tipo = model.tipo;
    if (model.cantidadKg !== undefined) entity.cantidadKg = model.cantidadKg;
    if (model.costoUnitarioKg !== undefined) entity.costoUnitarioKg = model.costoUnitarioKg;
    if (model.costoTotal !== undefined) entity.costoTotal = model.costoTotal;
    if (model.fecha !== undefined) entity.fecha = model.fecha;
    if (model.ventaId !== undefined) entity.ventaId = model.ventaId;
    if (model.descripcion !== undefined) entity.descripcion = model.descripcion;
    if (model.usuarioId !== undefined) entity.usuarioId = model.usuarioId;
    return entity;
  }
}
