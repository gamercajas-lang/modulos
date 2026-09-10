export class TipoSensor {
  constructor(
    public readonly id: number | null,
    public nombre: string,
    public unidad: string,
    public decimales: number,
    public descripcion: string | null,
    public imagen: string | null,
    public ttlMinutos: number,
  ) {}

  esValorExpirado(fechaLectura: Date): boolean {
    const minutos = (Date.now() - fechaLectura.getTime()) / 60000;
    return minutos > this.ttlMinutos;
  }
}
