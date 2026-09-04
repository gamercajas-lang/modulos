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

@Entity('actividades_herramientas')
export class ActividadHerramienta {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'actividadId' }) actividadId!: number;
  @Column({ name: 'activoFijoId' }) activoFijoId!: number;
  @Column({ type: 'double precision', nullable: true }) horasEstimadas!: number | null;

  @ManyToOne(() => Actividad, (actividad) => actividad.herramientas, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'actividadId' }) actividad!: Actividad;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt!: Date | null;
}
