export class IotGlobalConfig {
  constructor(
    public readonly id: number | null,
    public nombre: string,
    public agente: string,
    public puerto: number,
    public protocolo: 'mqtt' | 'mqtts' | 'http' | 'https',
    public prefijoTema: string,
    public loteId: number | null,
    public subLoteId: number | null,
    public activo: boolean,
    public autoDiscover: boolean,
    public sensoresPredeterminadosInicializados: boolean,
    public temasPredeterminados: string | null = null,
    public temasPersonalizados: string | null = null,
    public nombreUsuario: string | null = null,
    public contrasena: string | null = null,
  ) {}

  construirTopicCompleto(sufijo: string): string {
    return `${this.prefijoTema}/${sufijo}`;
  }
}
