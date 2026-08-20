export class SensorLectura {
  constructor(
    public readonly id: number | null,
    public sensorId: number,
    public valor: number,
    public fechaLectura: Date,
    public unidad: string | null = null,
    public observaciones: string | null = null,
  ) {}
}
