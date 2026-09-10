export class Sensor {
  constructor(
    public readonly id: number | null,
    public nombreSensor: string,
    public tipoSensorId: number,
    public globalConfigId: number,
    public protocolo: string,
    public valorMinimoSensor: number,
    public valorMaximoSensor: number,
    public activo: boolean,
    public estadoConexion: string | null,
    public ultimoValor: string | null,
    public ultimaMedicion: Date | null,
    public lastSeenAt: Date | null,
    public loteId: number | null,
    public subLoteId: number | null,
    public cultivoId: number | null,
    public endpointUrl: string | null = null,
    public mqttTopic: string | null = null,
    public estado: string | null = null,
    public creadoPorUsuarioId: number | null = null,
  ) {}

  registrarLectura(valor: number, fecha: Date): void {
    if (valor < this.valorMinimoSensor || valor > this.valorMaximoSensor) {
      throw new Error(
        `Valor ${valor} fuera de rango para el sensor ${this.nombreSensor} (rango: ${this.valorMinimoSensor}-${this.valorMaximoSensor})`,
      );
    }
    this.ultimoValor = String(valor);
    this.ultimaMedicion = fecha;
    this.lastSeenAt = fecha;
    this.estadoConexion = 'conectado';
  }

  marcarComoDesconectado(ttlMinutos: number): boolean {
    if (!this.lastSeenAt) return false;
    const minutos = (Date.now() - this.lastSeenAt.getTime()) / 60000;
    if (minutos > ttlMinutos) {
      this.estadoConexion = 'desconectado';
      return true;
    }
    return false;
  }
}
