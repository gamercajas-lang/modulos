import { Insumo } from '../../../domain/models/insumo.model';
import { InsumoEntity } from '../entities/insumo.entity';
import { AlmacenMapper } from './almacen.mapper';
import { CategoriaMapper } from './categoria.mapper';

export class InsumoMapper {
  static toDomain(entity: InsumoEntity): Insumo {
    if (!entity) return null;
    return new Insumo(
      entity.id,
      entity.nombre,
      entity.descripcion,
      entity.fotoUrl,
      entity.presentacionTipo,
      entity.presentacionCantidad,
      entity.presentacionUnidad,
      entity.unidadUso,
      entity.tipoMateria,
      entity.factorConversionUso,
      entity.stockPresentacion,
      entity.stockUso,
      entity.precioUnitarioPresentacion,
      entity.precioUnitarioUso,
      entity.valorInventario,
      entity.almacenId,
      entity.proveedorId,
      entity.categoriaId,
      entity.fechaRegistro,
      entity.creadoPorUsuarioId,
      entity.tipoInsumo,
      entity.costoAdquisicion,
      entity.valorResidual,
      entity.vidaUtilHoras,
      entity.horasUsadas,
      entity.stockReservado,
      entity.depreciacionAcumulada,
      entity.stockMinimo,
      entity.estado,
      entity.costoUnitario,
      entity.fechaAdquisicion,
      entity.fechaUltimoMantenimiento,
      entity.fechaBaja,
      entity.createdAt,
      entity.updatedAt,
      entity.deletedAt,
      entity.almacen ? AlmacenMapper.toDomain(entity.almacen) : undefined,
      entity.categoria ? CategoriaMapper.toDomain(entity.categoria) : undefined,
    );
  }

  static toPersistence(model: Partial<Insumo>): Partial<InsumoEntity> {
    if (!model) return null;
    const entity = new InsumoEntity();
    if (model.id !== undefined) entity.id = model.id;
    if (model.nombre !== undefined) entity.nombre = model.nombre;
    if (model.descripcion !== undefined) entity.descripcion = model.descripcion;
    if (model.fotoUrl !== undefined) entity.fotoUrl = model.fotoUrl;
    if (model.presentacionTipo !== undefined) entity.presentacionTipo = model.presentacionTipo;
    if (model.presentacionCantidad !== undefined) entity.presentacionCantidad = model.presentacionCantidad;
    if (model.presentacionUnidad !== undefined) entity.presentacionUnidad = model.presentacionUnidad;
    if (model.unidadUso !== undefined) entity.unidadUso = model.unidadUso;
    if (model.tipoMateria !== undefined) entity.tipoMateria = model.tipoMateria;
    if (model.factorConversionUso !== undefined) entity.factorConversionUso = model.factorConversionUso;
    if (model.stockPresentacion !== undefined) entity.stockPresentacion = model.stockPresentacion;
    if (model.stockUso !== undefined) entity.stockUso = model.stockUso;
    if (model.precioUnitarioPresentacion !== undefined) entity.precioUnitarioPresentacion = model.precioUnitarioPresentacion;
    if (model.precioUnitarioUso !== undefined) entity.precioUnitarioUso = model.precioUnitarioUso;
    if (model.valorInventario !== undefined) entity.valorInventario = model.valorInventario;
    if (model.almacenId !== undefined) entity.almacenId = model.almacenId;
    if (model.proveedorId !== undefined) entity.proveedorId = model.proveedorId;
    if (model.categoriaId !== undefined) entity.categoriaId = model.categoriaId;
    if (model.fechaRegistro !== undefined) entity.fechaRegistro = model.fechaRegistro;
    if (model.creadoPorUsuarioId !== undefined) entity.creadoPorUsuarioId = model.creadoPorUsuarioId;
    if (model.tipoInsumo !== undefined) entity.tipoInsumo = model.tipoInsumo;
    if (model.costoAdquisicion !== undefined) entity.costoAdquisicion = model.costoAdquisicion;
    if (model.valorResidual !== undefined) entity.valorResidual = model.valorResidual;
    if (model.vidaUtilHoras !== undefined) entity.vidaUtilHoras = model.vidaUtilHoras;
    if (model.horasUsadas !== undefined) entity.horasUsadas = model.horasUsadas;
    if (model.stockReservado !== undefined) entity.stockReservado = model.stockReservado;
    if (model.depreciacionAcumulada !== undefined) entity.depreciacionAcumulada = model.depreciacionAcumulada;
    if (model.stockMinimo !== undefined) entity.stockMinimo = model.stockMinimo;
    if (model.estado !== undefined) entity.estado = model.estado;
    if (model.costoUnitario !== undefined) entity.costoUnitario = model.costoUnitario;
    if (model.fechaAdquisicion !== undefined) entity.fechaAdquisicion = model.fechaAdquisicion;
    if (model.fechaUltimoMantenimiento !== undefined) entity.fechaUltimoMantenimiento = model.fechaUltimoMantenimiento;
    if (model.fechaBaja !== undefined) entity.fechaBaja = model.fechaBaja;
    return entity;
  }
}
