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

@Entity('facturas')
export class Factura {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'ventaId' }) ventaId!: number;
  @Column({ length: 50 }) numero!: string;
  @Column({ type: 'varchar', length: 20, nullable: true }) prefijo!: string | null;
  @Column({ name: 'fechaEmision', type: 'timestamp' }) fechaEmision!: Date;
  @Column({ name: 'vencimiento', type: 'timestamp', nullable: true }) vencimiento!: Date | null;
  @Column({ name: 'qrUrl', type: 'varchar', length: 500, nullable: true }) qrUrl!: string | null;
  @Column({ name: 'pdfUrl', type: 'varchar', length: 500, nullable: true }) pdfUrl!: string | null;

  @ManyToOne(() => Venta, (venta) => venta.facturas, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ventaId' }) venta!: Venta;

  @CreateDateColumn({ name: 'created_at' }) createdAt!: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt!: Date;
  @DeleteDateColumn({ name: 'deleted_at', nullable: true }) deletedAt!: Date | null;
}
