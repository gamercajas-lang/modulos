export class SensorAlerta {
  constructor(
    public readonly id: number | null,
    public sensorId: number,
    public loteId: number | null,
    public subLoteId: number | null,
    public tipo: string,
    public valor: number,
    public umbral: number,
    public fechaAlerta: Date,
  ) {}
}
