export interface ProgramaFormacionProps {
  id?: number;
  numeroFicha: string;
  nombre: string;
  tipo?: string | null;
  descripcion?: string | null;
  fechaInicio?: Date | null;
  fechaFin?: Date | null;
  estado?: string;
  cantidadAprendices?: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}

export class ProgramaFormacion {
  readonly id?: number;
  numeroFicha: string;
  nombre: string;
  tipo: string | null;
  descripcion: string | null;
  fechaInicio: Date | null;
  fechaFin: Date | null;
  estado: string;
  cantidadAprendices: number;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
  readonly deletedAt?: Date | null;

  constructor(props: ProgramaFormacionProps) {
    if (!props.numeroFicha?.trim()) {
      throw new Error('El programa de formacion requiere numeroFicha');
    }
    if (!props.nombre?.trim()) {
      throw new Error('El programa de formacion requiere nombre');
    }
    if (
      props.fechaInicio &&
      props.fechaFin &&
      props.fechaFin < props.fechaInicio
    ) {
      throw new Error('fechaFin no puede ser anterior a fechaInicio');
    }

    this.id = props.id;
    this.numeroFicha = props.numeroFicha.trim();
    this.nombre = props.nombre.trim();
    this.tipo = props.tipo ?? null;
    this.descripcion = props.descripcion ?? null;
    this.fechaInicio = props.fechaInicio ?? null;
    this.fechaFin = props.fechaFin ?? null;
    this.estado = props.estado ?? 'activo';
    this.cantidadAprendices = props.cantidadAprendices ?? 0;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.deletedAt = props.deletedAt ?? null;
  }

  finalizar(): void {
    this.estado = 'finalizado';
  }
}
