/**
 * Entidad de dominio Usuario.
 * No conoce TypeORM, NestJS ni bcrypt: el hashing de la contrasena
 * es una responsabilidad de la capa de aplicacion (use-cases),
 * el dominio solo transporta el hash ya calculado.
 */
export interface UsuarioProps {
  id?: number;
  nombre: string;
  apellido: string;
  identificacion: string;
  idFicha?: string | null;
  programaFormacionId?: number | null;
  telefono?: string | null;
  correo: string;
  passwordHash: string;
  emailVerifiedAt?: Date | null;
  estado?: string;
  lastLoginAt?: Date | null;
  avatarUrl?: string | null;
  rolId?: number | null;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}

const CORREO_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export class Usuario {
  readonly id?: number;
  nombre: string;
  apellido: string;
  identificacion: string;
  idFicha: string | null;
  programaFormacionId: number | null;
  telefono: string | null;
  correo: string;
  passwordHash: string;
  emailVerifiedAt: Date | null;
  estado: string;
  lastLoginAt: Date | null;
  avatarUrl: string | null;
  rolId: number | null;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
  readonly deletedAt?: Date | null;

  constructor(props: UsuarioProps) {
    if (!props.nombre?.trim() || !props.apellido?.trim()) {
      throw new Error('El usuario requiere nombre y apellido');
    }
    if (!props.identificacion?.trim()) {
      throw new Error('El usuario requiere identificacion');
    }
    if (!props.correo?.trim() || !CORREO_REGEX.test(props.correo.trim())) {
      throw new Error('El correo del usuario no es valido');
    }
    if (!props.passwordHash) {
      throw new Error('El usuario requiere passwordHash');
    }

    this.id = props.id;
    this.nombre = props.nombre.trim();
    this.apellido = props.apellido.trim();
    this.identificacion = props.identificacion.trim();
    this.idFicha = props.idFicha ?? null;
    this.programaFormacionId = props.programaFormacionId ?? null;
    this.telefono = props.telefono ?? null;
    this.correo = props.correo.trim().toLowerCase();
    this.passwordHash = props.passwordHash;
    this.emailVerifiedAt = props.emailVerifiedAt ?? null;
    this.estado = props.estado ?? 'activo';
    this.lastLoginAt = props.lastLoginAt ?? null;
    this.avatarUrl = props.avatarUrl ?? null;
    this.rolId = props.rolId ?? null;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.deletedAt = props.deletedAt ?? null;
  }

  verificarEmail(): void {
    this.emailVerifiedAt = new Date();
  }

  registrarInicioSesion(): void {
    this.lastLoginAt = new Date();
  }

  estaActivo(): boolean {
    return this.estado === 'activo';
  }
}
