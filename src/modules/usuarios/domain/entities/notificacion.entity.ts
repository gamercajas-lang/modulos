export interface NotificacionProps {
  id?: number;
  usuarioId: number;
  titulo: string;
  mensaje?: string | null;
  leida?: boolean;
  tipo?: string | null;
  metadata?: Record<string, any> | null;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}

export class Notificacion {
  readonly id?: number;
  usuarioId: number;
  titulo: string;
  mensaje: string | null;
  leida: boolean;
  tipo: string | null;
  metadata: Record<string, any> | null;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
  readonly deletedAt?: Date | null;

  constructor(props: NotificacionProps) {
    if (!props.usuarioId) {
      throw new Error('La notificacion requiere usuarioId');
    }
    if (!props.titulo?.trim()) {
      throw new Error('La notificacion requiere titulo');
    }

    this.id = props.id;
    this.usuarioId = props.usuarioId;
    this.titulo = props.titulo.trim();
    this.mensaje = props.mensaje ?? null;
    this.leida = props.leida ?? false;
    this.tipo = props.tipo ?? null;
    this.metadata = props.metadata ?? null;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.deletedAt = props.deletedAt ?? null;
  }

  marcarComoLeida(): void {
    this.leida = true;
  }
}
