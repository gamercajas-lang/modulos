import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Actividad } from './actividad.entity';

@Entity('usos_herramientas')
export class UsoHerramienta {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'actividadId' }) actividadId!: number;
  @Column({ name: 'insumoId' }) insumoId!: number;
  @Column({ type: 'double precision' }) horasUsadas!: number;
  @Column({ type: 'double precision' }) depreciacionGenerada!: number;
  @Column({ type: 'double precision' }) valorEnLibrosAntes!: number;
  @Column({ type: 'double precision' }) valorEnLibrosDespues!: number;
  @Column({ type: 'timestamp' }) fechaUso!: Date;

  @ManyToOne(() => Actividad, (actividad) => actividad.usosHerramientas, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'actividadId' }) actividad!: Actividad;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt!: Date | null;
}
