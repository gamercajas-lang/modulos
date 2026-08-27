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

@Entity('actividad_historial')
export class ActividadHistorial {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'actividadId' })
  actividadId!: number;

  @Column({ name: 'usuarioId' })
  usuarioId!: number;

  @Column({ type: 'text', nullable: true })
  motivo!: string | null;

  @Column({ type: 'jsonb', nullable: true })
  cambios!: Record<string, unknown> | null;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt!: Date | null;

  @ManyToOne(() => Actividad, (actividad) => actividad.historial, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'actividadId' })
  actividad!: Actividad;
}
