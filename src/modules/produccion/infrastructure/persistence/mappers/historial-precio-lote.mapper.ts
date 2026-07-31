import { HistorialPrecioLote } from '../../../domain/models/historial-precio-lote.model';
import { HistorialPrecioLoteEntity } from '../entities/historial-precio-lote.entity';
import { LoteProduccionMapper } from './lote-produccion.mapper';

export class HistorialPrecioLoteMapper {
  static toDomain(entity: HistorialPrecioLoteEntity): HistorialPrecioLote {
    if (!entity) return null;
    return new HistorialPrecioLote(
      entity.id,
      entity.loteProduccionId,
      entity.precioAnterior,
      entity.precioNuevo,
      entity.usuarioId,
      entity.fecha,
      entity.razon,
      entity.createdAt,
      entity.updatedAt,
      entity.deletedAt,
      entity.loteProduccion ? LoteProduccionMapper.toDomain(entity.loteProduccion) : undefined,
    );
  }

  static toPersistence(model: Partial<HistorialPrecioLote>): Partial<HistorialPrecioLoteEntity> {
    if (!model) return null;
    const entity = new HistorialPrecioLoteEntity();
    if (model.id !== undefined) entity.id = model.id;
    if (model.loteProduccionId !== undefined) entity.loteProduccionId = model.loteProduccionId;
    if (model.precioAnterior !== undefined) entity.precioAnterior = model.precioAnterior;
    if (model.precioNuevo !== undefined) entity.precioNuevo = model.precioNuevo;
    if (model.usuarioId !== undefined) entity.usuarioId = model.usuarioId;
    if (model.fecha !== undefined) entity.fecha = model.fecha;
    if (model.razon !== undefined) entity.razon = model.razon;
    return entity;
  }
}
