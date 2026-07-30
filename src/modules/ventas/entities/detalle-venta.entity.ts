import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Venta } from './venta.entity';

// ⚠️ AJUSTA la ruta al entity que expone Producción/Inventario (P3)
// (el ítem vendible: cosecha/lote de producción con stock disponible)
import { Produccion } from '../../produccion/entities/produccion.entity';

@Entity('detalle_ventas')
export class DetalleVenta {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Venta, (v) => v.detalles, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'venta_id' })
  venta: Venta;

  @Column({ name: 'venta_id' })
  ventaId: string;

  @ManyToOne(() => Produccion, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'produccion_id' })
  produccion: Produccion;

  @Column({ name: 'produccion_id' })
  produccionId: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  cantidad: number;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  precioUnitario: number;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  subtotal: number;
}
