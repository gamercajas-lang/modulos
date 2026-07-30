import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Lote } from './lote.entity';
import { Sublote } from './sublote.entity';
import { CultivoHistorial } from './cultivo-historial.entity';

@Entity('cultivos')
export class Cultivo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', name: 'nombreCultivo' })
  nombreCultivo: string;

  @Column({ type: 'varchar', name: 'tipoCultivo' })
  tipoCultivo: string;

  @Column({ type: 'varchar', nullable: true })
  descripcion: string;

  @ManyToOne(() => Lote, (lote) => lote.cultivos, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'lote_id' })
  lote: Lote;

  @ManyToOne(() => Sublote, (sublote) => sublote.cultivos, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'sublote_id' })
  sublote: Sublote;

  @Column({ type: 'varchar', nullable: true, name: 'img_cultivo' })
  imgCultivo: string;

  @Column({ type: 'date', nullable: true, name: 'fechaSiembra' })
  fechaSiembra: Date;

  @Column({ type: 'date', nullable: true, name: 'fechaFinalizacion' })
  fechaFinalizacion: Date;

  @Column({ type: 'double precision', nullable: true, name: 'costoTotal' })
  costoTotal: number;

  @Column({ type: 'varchar', nullable: true })
  estado: string;

  @CreateDateColumn({ name: 'fechaCreacion' })
  fechaCreacion: Date;

  @OneToMany(() => CultivoHistorial, (historial) => historial.cultivo)
  historial: CultivoHistorial[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
