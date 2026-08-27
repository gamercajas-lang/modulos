import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

import { OneToMany } from 'typeorm';
import { VentaDetalle } from './venta-detalle.entity';
import { Pago } from './pago.entity';
import { Factura } from './factura.entity';

@Entity('ventas')
export class Venta {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'timestamp' }) fecha!: Date;
  @Column({ name: 'clienteId' }) clienteId!: number;
  @Column({ type: 'double precision' }) subtotal!: number;
  @Column({ type: 'double precision' }) impuestos!: number;
  @Column({ type: 'double precision' }) descuento!: number;
  @Column({ type: 'double precision' }) total!: number;
  @Column({ length: 50 }) estado!: string;
  @Column({ name: 'usuarioId' }) usuarioId!: number;
  @Column({ name: 'anulada_por_usuario_id', type: 'int', nullable: true }) anuladaPorUsuarioId!: number | null;
  @Column({ name: 'fecha_anulacion', type: 'timestamp', nullable: true }) fechaAnulacion!: Date | null;

  @OneToMany(() => VentaDetalle, (detalle) => detalle.venta) detalles!: VentaDetalle[];
  @OneToMany(() => Pago, (pago) => pago.venta) pagos!: Pago[];
  @OneToMany(() => Factura, (factura) => factura.venta) facturas!: Factura[];

  @CreateDateColumn({ name: 'created_at' }) createdAt!: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt!: Date;
  @DeleteDateColumn({ name: 'deleted_at', nullable: true }) deletedAt!: Date | null;
}
