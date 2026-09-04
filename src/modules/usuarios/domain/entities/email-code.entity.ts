/**
 * Entidad de soporte (no expone CRUD REST propio).
 * Utilizada por flujos de verificacion de correo / recuperacion de clave.
 */
export interface EmailCodeProps {
  id?: number;
  usuarioId: number;
  tipo: string;
  code: string;
  expiresAt: Date;
  usedAt?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}

export class EmailCode {
  readonly id?: number;
  usuarioId: number;
  tipo: string;
  code: string;
  expiresAt: Date;
  usedAt: Date | null;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
  readonly deletedAt?: Date | null;

  constructor(props: EmailCodeProps) {
    if (!props.usuarioId) {
      throw new Error('El codigo de correo requiere usuarioId');
    }
    if (!props.tipo?.trim() || !props.code?.trim()) {
      throw new Error('El codigo de correo requiere tipo y code');
    }

    this.id = props.id;
    this.usuarioId = props.usuarioId;
    this.tipo = props.tipo.trim();
    this.code = props.code.trim();
    this.expiresAt = props.expiresAt;
    this.usedAt = props.usedAt ?? null;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.deletedAt = props.deletedAt ?? null;
  }

  estaExpirado(referencia: Date = new Date()): boolean {
    return referencia > this.expiresAt;
  }

  estaUsado(): boolean {
    return this.usedAt !== null;
  }

  marcarComoUsado(): void {
    this.usedAt = new Date();
  }
}
