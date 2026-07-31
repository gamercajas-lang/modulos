import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('actividades_insumos_uso')
export class ActividadInsumoUso {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  actividadId!: number;

  @Column()
  insumoId!: number;

  @Column('double precision')
  cantidadUsada!: number;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @DeleteDateColumn()
  deleted_at!: Date;
}