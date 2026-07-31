import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { ProductoAgroEntity } from './producto-agro.entity';
import { MovimientoProduccionEntity } from './movimiento-produccion.entity';
import { HistorialPrecioLoteEntity } from './historial-precio-lote.entity';

@Entity('lotes_produccion')
export class LoteProduccionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer', name: 'producto_agro_id' })
  productoAgroId: number;

  @Column({ type: 'integer', name: 'cultivo_id', nullable: true })
  cultivoId: number;

  @Column({ type: 'integer', name: 'lote_id', nullable: true })
  loteId: number;

  @Column({ type: 'integer', name: 'sub_lote_id', nullable: true })
  subLoteId: number;

  @Column({ type: 'integer', name: 'actividad_cosecha_id', nullable: true })
  actividadCosechaId: number;

  @Column({ type: 'varchar', nullable: true })
  calidad: string;

  @Column({ type: 'double precision', name: 'cantidad_kg', nullable: true })
  cantidadKg: number;

  @Column({ type: 'double precision', name: 'stock_disponible_kg', nullable: true })
  stockDisponibleKg: number;

  @Column({ type: 'double precision', name: 'costo_unitario_kg', nullable: true })
  costoUnitarioKg: number;

  @Column({ type: 'double precision', name: 'costo_total', nullable: true })
  costoTotal: number;

  @Column({ type: 'double precision', name: 'precio_sugerido_kg', nullable: true })
  precioSugeridoKg: number;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at', nullable: true })
  deletedAt: Date;

  @ManyToOne(() => ProductoAgroEntity, (producto) => producto.lotesProduccion, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'producto_agro_id' })
  productoAgro: ProductoAgroEntity;

  @OneToMany(() => MovimientoProduccionEntity, (movimiento) => movimiento.loteProduccion)
  movimientosProduccion: MovimientoProduccionEntity[];

  @OneToMany(() => HistorialPrecioLoteEntity, (historial) => historial.loteProduccion)
  historialPreciosLote: HistorialPrecioLoteEntity[];
}
