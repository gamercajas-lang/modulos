import { LoteProduccion } from '../../../domain/models/lote-produccion.model';
import { LoteProduccionEntity } from '../entities/lote-produccion.entity';
import { ProductoAgroMapper } from './producto-agro.mapper';

export class LoteProduccionMapper {
  static toDomain(entity: LoteProduccionEntity): LoteProduccion {
    if (!entity) return null;
    return new LoteProduccion(
      entity.id,
      entity.productoAgroId,
      entity.cultivoId,
      entity.loteId,
      entity.subLoteId,
      entity.actividadCosechaId,
      entity.calidad,
      entity.cantidadKg,
      entity.stockDisponibleKg,
      entity.costoUnitarioKg,
      entity.costoTotal,
      entity.precioSugeridoKg,
      entity.createdAt,
      entity.updatedAt,
      entity.deletedAt,
      entity.productoAgro ? ProductoAgroMapper.toDomain(entity.productoAgro) : undefined,
    );
  }

  static toPersistence(model: Partial<LoteProduccion>): Partial<LoteProduccionEntity> {
    if (!model) return null;
    const entity = new LoteProduccionEntity();
    if (model.id !== undefined) entity.id = model.id;
    if (model.productoAgroId !== undefined) entity.productoAgroId = model.productoAgroId;
    if (model.cultivoId !== undefined) entity.cultivoId = model.cultivoId;
    if (model.loteId !== undefined) entity.loteId = model.loteId;
    if (model.subLoteId !== undefined) entity.subLoteId = model.subLoteId;
    if (model.actividadCosechaId !== undefined) entity.actividadCosechaId = model.actividadCosechaId;
    if (model.calidad !== undefined) entity.calidad = model.calidad;
    if (model.cantidadKg !== undefined) entity.cantidadKg = model.cantidadKg;
    if (model.stockDisponibleKg !== undefined) entity.stockDisponibleKg = model.stockDisponibleKg;
    if (model.costoUnitarioKg !== undefined) entity.costoUnitarioKg = model.costoUnitarioKg;
    if (model.costoTotal !== undefined) entity.costoTotal = model.costoTotal;
    if (model.precioSugeridoKg !== undefined) entity.precioSugeridoKg = model.precioSugeridoKg;
    return entity;
  }
}
