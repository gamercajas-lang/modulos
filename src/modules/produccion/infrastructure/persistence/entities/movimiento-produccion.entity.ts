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
import { LoteProduccionEntity } from './lote-produccion.entity';

@Entity('movimientos_produccion')
export class MovimientoProduccionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer', name: 'lote_produccion_id' })
  loteProduccionId: number;

  @Column({ type: 'varchar' })
  tipo: string;

  @Column({ type: 'double precision', name: 'cantidad_kg' })
  cantidadKg: number;

  @Column({ type: 'double precision', name: 'costo_unitario_kg' })
  costoUnitarioKg: number;

  @Column({ type: 'double precision', name: 'costo_total' })
  costoTotal: number;

  @Column({ type: 'integer', name: 'venta_id', nullable: true })
  ventaId: number;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'integer', name: 'usuario_id', nullable: true })
  usuarioId: number;

  @Column({ type: 'timestamp' })
  fecha: Date;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at', nullable: true })
  deletedAt: Date;

  @ManyToOne(() => LoteProduccionEntity, (lote) => lote.movimientosProduccion, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'lote_produccion_id' })
  loteProduccion: LoteProduccionEntity;
}
