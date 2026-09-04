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

@Entity('actividades_servicios')
export class ActividadServicio {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'actividadId' }) actividadId!: number;
  @Column({ name: 'nombreServicio', length: 150 }) nombreServicio!: string;
  @Column({ type: 'double precision', nullable: true }) horas!: number | null;
  @Column({ type: 'double precision', nullable: true }) precioHora!: number | null;
  @Column({ type: 'double precision', nullable: true }) costo!: number | null;
  @Column({ name: 'maquinariaId', type: 'int', nullable: true }) maquinariaId!: number | null;

  @ManyToOne(() => Actividad, (actividad) => actividad.servicios, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'actividadId' }) actividad!: Actividad;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt!: Date | null;
}
