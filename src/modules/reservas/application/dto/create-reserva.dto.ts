export class CreateReservaDto {
  insumoId!: number;
  cantidad!: number;
  fechaReserva!: Date;
  motivo!: string;
  estado!: string;
  usuarioId!: number;
  actividadId!: number;
}