import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('insumos')
export class Insumo {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar' })
  nombre!: string;

  @Column({ type: 'text', nullable: true })
  descripcion!: string;

  @Column({ type: 'varchar', nullable: true })
  fotoUrl!: string;

  @Column({ type: 'varchar', nullable: true })
  presentacionTipo!: string;

  @Column({ type: 'double precision', nullable: true })
  presentacionCantidad!: number;

  @Column({ type: 'varchar', nullable: true })
  presentacionUnidad!: string;

  @Column({ type: 'varchar', nullable: true })
  unidadUso!: string;

  @Column({ type: 'varchar', nullable: true })
  tipoMateria!: string;

  @Column({ type: 'double precision', nullable: true })
  factorConversionUso!: number;

  @Column({ type: 'double precision', default: 0 })
  stockPresentacion!: number;

  @Column({ type: 'double precision', default: 0 })
  stockUso!: number;

  @Column({ type: 'double precision', nullable: true })
  precioUnitarioPresentacion!: number;

  @Column({ type: 'double precision', nullable: true })
  precioUnitarioUso!: number;

  @Column({ type: 'double precision', default: 0 })
  valorInventario!: number;

  @Column({ type: 'integer', nullable: true })
  almacenId!: number;

  @Column({ type: 'integer', nullable: true })
  proveedorId!: number;

  @Column({ type: 'integer', nullable: true })
  categoriaId!: number;

  @Column({ type: 'timestamp', nullable: true })
  fechaRegistro!: Date;

  @Column({ type: 'integer', nullable: true })
  creadoPorUsuarioId!: number;

  // ASUNCIÓN: valores de insumos_tipoinsumo_enum sin confirmar en el diagrama.
  @Column({ type: 'varchar' })
  tipoInsumo!: string;

  @Column({ type: 'double precision', nullable: true })
  costoAdquisicion!: number;

  @Column({ type: 'double precision', nullable: true })
  valorResidual!: number;

  @Column({ type: 'double precision', nullable: true })
  vidaUtilHoras!: number;

  @Column({ type: 'double precision', nullable: true })
  horasUsadas!: number;

  @Column({ type: 'double precision', default: 0 })
  stockReservado!: number;

  @Column({ type: 'double precision', default: 0 })
  depreciacionAcumulada!: number;

  @Column({ type: 'integer', nullable: true })
  stockMinimo!: number;

  // ASUNCIÓN: valores de insumos_estado_enum sin confirmar en el diagrama.
  @Column({ type: 'varchar', default: 'ACTIVO' })
  estado!: string;

  @Column({ type: 'numeric', precision: 10, scale: 2, nullable: true })
  costoUnitario!: number;

  @Column({ type: 'date', nullable: true })
  fechaAdquisicion!: Date;

  @Column({ type: 'date', nullable: true })
  fechaUltimoMantenimiento!: Date;

  @Column({ type: 'date', nullable: true })
  fechaBaja!: Date;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @DeleteDateColumn()
  deleted_at!: Date;
}
