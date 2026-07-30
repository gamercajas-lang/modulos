import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EstadoVenta, MetodoPago } from './venta-enums';
import { DetalleVenta } from './detalle-venta.entity';

// ⚠️ AJUSTA la ruta al entity de Usuario (P1)
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity('ventas')
export class Venta {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'date' })
  fecha: string;

  @Column({ length: 150 })
  clienteNombre: string;

  @Column({ length: 30, nullable: true })
  clienteDocumento: string;

  @Column({ length: 30, nullable: true })
  clienteTelefono: string;

  // Vendedor / responsable -> Usuarios (P1)
  @ManyToOne(() => Usuario, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'vendedor_id' })
  vendedor: Usuario;

  @Column({ name: 'vendedor_id' })
  vendedorId: string;

  @OneToMany(() => DetalleVenta, (d) => d.venta, { cascade: true, eager: true })
  detalles: DetalleVenta[];

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  subtotal: number;

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  impuestos: number;

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  total: number;

  @Column({ type: 'enum', enum: MetodoPago, default: MetodoPago.EFECTIVO })
  metodoPago: MetodoPago;

  @Column({ type: 'enum', enum: EstadoVenta, default: EstadoVenta.PENDIENTE })
  estado: EstadoVenta;

  @Column({ name: 'creado_por', nullable: true })
  creadoPor: string; // usuario_id, para auditoría (P1)

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
