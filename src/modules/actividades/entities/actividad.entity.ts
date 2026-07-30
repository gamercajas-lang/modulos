import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { TipoActividad, EstadoActividad } from './actividad-tipo.enum';
import { ActividadInsumo } from './actividad-insumo.entity';

// ⚠️ AJUSTA estas rutas de import a como las nombren tus compañeros
// en cultivos-lotes (P2) y usuarios (P1). Se asume nombres estándar.
import { Lote } from '../../cultivos-lotes/entities/lote.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity('actividades')
export class Actividad {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: TipoActividad })
  tipo: TipoActividad;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'date' })
  fecha: string;

  // Relación con Cultivos-Lotes (P2)
  @ManyToOne(() => Lote, { eager: false, onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'lote_id' })
  lote: Lote;

  @Column({ name: 'lote_id' })
  loteId: string;

  // Responsable de la actividad -> Usuarios (P1), para auditoría/autoría
  @ManyToOne(() => Usuario, { eager: false, onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'responsable_id' })
  responsable: Usuario;

  @Column({ name: 'responsable_id' })
  responsableId: string;

  // Insumos utilizados en la actividad -> Proveedores-Insumos (P4)
  @OneToMany(() => ActividadInsumo, (ai) => ai.actividad, { cascade: true })
  insumosUtilizados: ActividadInsumo[];

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  costoManoObra: number;

  @Column({ type: 'enum', enum: EstadoActividad, default: EstadoActividad.PLANIFICADA })
  estado: EstadoActividad;

  @Column({ name: 'creado_por', nullable: true })
  creadoPor: string; // usuario_id, para auditoría (P1)

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
