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

@Entity('pagos')
export class Pago {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'ventaId' }) ventaId!: number;
  @Column({ length: 50 }) metodo!: string;
  @Column({ type: 'double precision' }) monto!: number;
  @Column({ length: 10 }) moneda!: string;
  @Column({ type: 'varchar', length: 150, nullable: true }) referencia!: string | null;

  @ManyToOne(() => Venta, (venta) => venta.pagos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ventaId' }) venta!: Venta;

  @CreateDateColumn({ name: 'created_at' }) createdAt!: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt!: Date;
  @DeleteDateColumn({ name: 'deleted_at', nullable: true }) deletedAt!: Date | null;
}
