import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Actividad } from './actividad.entity';

// ⚠️ AJUSTA la ruta al entity de Insumo que defina Proveedores-Insumos (P4)
import { Insumo } from '../../proveedores-insumos/entities/insumo.entity';

@Entity('actividad_insumos')
export class ActividadInsumo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Actividad, (a) => a.insumosUtilizados, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'actividad_id' })
  actividad: Actividad;

  @Column({ name: 'actividad_id' })
  actividadId: string;

  @ManyToOne(() => Insumo, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'insumo_id' })
  insumo: Insumo;

  @Column({ name: 'insumo_id' })
  insumoId: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  cantidadUtilizada: number;

  @Column({ length: 20, default: 'unidad' })
  unidadMedida: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
