/**
 * Entidad de soporte (no expone CRUD REST propio).
 * Mantiene el estado de un formulario conversacional via bot de Telegram.
 * userId referencia al chat_id de Telegram, no a usuarios.id.
 */
export interface TelegramFormEstadoProps {
  id?: number;
  userId: string;
  step?: string | null;
  data?: Record<string, any> | null;
  estado?: string;
  accessToken?: number | null;
  updatedAt?: Date;
}

export class TelegramFormEstado {
  readonly id?: number;
  userId: string;
  step: string | null;
  data: Record<string, any> | null;
  estado: string;
  accessToken: number | null;
  readonly updatedAt?: Date;

  constructor(props: TelegramFormEstadoProps) {
    if (!props.userId?.trim()) {
      throw new Error('El estado de formulario requiere userId de Telegram');
    }

    this.id = props.id;
    this.userId = props.userId.trim();
    this.step = props.step ?? null;
    this.data = props.data ?? null;
    this.estado = props.estado ?? 'activo';
    this.accessToken = props.accessToken ?? null;
    this.updatedAt = props.updatedAt;
  }

  completar(): void {
    this.estado = 'completado';
  }
}
