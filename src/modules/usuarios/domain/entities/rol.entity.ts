/**
 * Entidad de dominio Rol.
 * Clase TypeScript pura: sin decoradores de NestJS ni de TypeORM,
 * sin dependencias de infraestructura.
 */
export interface RolProps {
  id?: number;
  nombre: string;
  descripcion?: string | null;
  esSistema?: boolean;
  estado?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}

export class Rol {
  readonly id?: number;
  nombre: string;
  descripcion: string | null;
  esSistema: boolean;
  estado: string;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
  readonly deletedAt?: Date | null;

  constructor(props: RolProps) {
    if (!props.nombre || !props.nombre.trim()) {
      throw new Error('El rol debe tener un nombre');
    }

    this.id = props.id;
    this.nombre = props.nombre.trim();
    this.descripcion = props.descripcion ?? null;
    this.esSistema = props.esSistema ?? false;
    this.estado = props.estado ?? 'activo';
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.deletedAt = props.deletedAt ?? null;
  }

  activar(): void {
    this.estado = 'activo';
  }

  desactivar(): void {
    if (this.esSistema) {
      throw new Error('No es posible desactivar un rol de sistema');
    }
    this.estado = 'inactivo';
  }
}
