export interface TipoFormacionProps {
  id?: number;
  codigo: string;
  nombre: string;
  descripcion?: string | null;
  activo?: boolean;
  orden?: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}

export class TipoFormacion {
  readonly id?: number;
  codigo: string;
  nombre: string;
  descripcion: string | null;
  activo: boolean;
  orden: number;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
  readonly deletedAt?: Date | null;

  constructor(props: TipoFormacionProps) {
    if (!props.codigo?.trim() || !props.nombre?.trim()) {
      throw new Error('El tipo de formacion requiere codigo y nombre');
    }

    this.id = props.id;
    this.codigo = props.codigo.trim();
    this.nombre = props.nombre.trim();
    this.descripcion = props.descripcion ?? null;
    this.activo = props.activo ?? true;
    this.orden = props.orden ?? 0;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.deletedAt = props.deletedAt ?? null;
  }
}
