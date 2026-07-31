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

@Entity('historial_precios_lote')
export class HistorialPrecioLoteEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer', name: 'lote_produccion_id' })
  loteProduccionId: number;

  @Column({ type: 'double precision', name: 'precio_anterior' })
  precioAnterior: number;

  @Column({ type: 'double precision', name: 'precio_nuevo' })
  precioNuevo: number;

  @Column({ type: 'integer', name: 'usuario_id', nullable: true })
  usuarioId: number;

  @Column({ type: 'timestamp' })
  fecha: Date;

  @Column({ type: 'varchar', nullable: true })
  razon: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at', nullable: true })
  deletedAt: Date;

  @ManyToOne(() => LoteProduccionEntity, (lote) => lote.historialPreciosLote, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'lote_produccion_id' })
  loteProduccion: LoteProduccionEntity;
}
