import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

import { ManyToOne, JoinColumn } from 'typeorm';
import { Venta } from './venta.entity';

@Entity('ventas_detalles')
export class VentaDetalle {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'ventaId' }) ventaId!: number;
  @Column({ name: 'productoAgroId' }) productoAgroId!: number;
  @Column({ name: 'loteProduccionId', type: 'int', nullable: true }) loteProduccionId!: number | null;
  @Column({ name: 'cultivoId', type: 'int', nullable: true }) cultivoId!: number | null;
  @Column({ type: 'double precision' }) cantidadKg!: number;
  @Column({ type: 'double precision' }) precioUnitarioKg!: number;
  @Column({ type: 'double precision' }) precioTotal!: number;
  @Column({ type: 'double precision' }) costoUnitarioKg!: number;
  @Column({ type: 'double precision' }) costoTotal!: number;

  @ManyToOne(() => Venta, (venta) => venta.detalles, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ventaId' }) venta!: Venta;

  @CreateDateColumn({ name: 'created_at' }) createdAt!: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt!: Date;
  @DeleteDateColumn({ name: 'deleted_at', nullable: true }) deletedAt!: Date | null;
}
