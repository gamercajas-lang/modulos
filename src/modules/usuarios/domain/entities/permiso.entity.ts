export interface PermisoProps {
  id?: number;
  modulo: string;
  accion: string;
  clave: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}

export class Permiso {
  readonly id?: number;
  modulo: string;
  accion: string;
  clave: string;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
  readonly deletedAt?: Date | null;

  constructor(props: PermisoProps) {
    if (!props.modulo?.trim() || !props.accion?.trim() || !props.clave?.trim()) {
      throw new Error('El permiso requiere modulo, accion y clave');
    }

    this.id = props.id;
    this.modulo = props.modulo.trim();
    this.accion = props.accion.trim();
    this.clave = props.clave.trim();
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.deletedAt = props.deletedAt ?? null;
  }
}
