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

@Entity('actividades_evidencias')
export class ActividadEvidencia {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'actividadId' })
  actividadId!: number;

  @Column({ type: 'text', nullable: true })
  descripcion!: string | null;

  @Column({ type: 'text', nullable: true })
  imagenes!: string | null;

  @ManyToOne(() => Actividad, (actividad) => actividad.evidencias, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'actividadId' })
  actividad!: Actividad;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt!: Date | null;
}
