export class CreateMovimientoInsumoDto {
  readonly insumoId?: number;
  readonly tipo?: string;
  readonly cantidadPresentacion?: number;
  readonly costoUnitarioPresentacion?: number;
  readonly costoUnitarioUso?: number;
  readonly costoTotal?: number;
  readonly valorInventarioResultante?: number;
  readonly descripcion?: string;
  readonly actividadId?: number;
  readonly usuarioId?: number;
  readonly almacenOrigenId?: number;
  readonly almacenDestinoId?: number;
}