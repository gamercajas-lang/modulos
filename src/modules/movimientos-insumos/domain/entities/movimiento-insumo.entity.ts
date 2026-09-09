import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('movimientos_insumos')
export class MovimientoInsumo {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  insumoId!: number;

  @Column()
  tipo!: string;

  @Column('double precision')
  cantidadPresentacion!: number;

  @Column('double precision')
  cantidadUso!: number;

  @Column('double precision')
  costoUnitarioPresentacion!: number;

  @Column('double precision')
  costoUnitarioUso!: number;

  @Column('double precision')
  costoTotal!: number;

  @Column('double precision')
  valorInventarioResultante!: number;

  @Column('text')
  descripcion!: string;

  @Column()
  actividadId!: number;

  @Column()
  usuarioId!: number;

  @Column()
  almacenOrigenId!: number;

  @Column()
  almacenDestinoId!: number;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @DeleteDateColumn()
  deleted_at!: Date;
}