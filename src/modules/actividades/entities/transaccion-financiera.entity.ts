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

import { Actividad } from './actividad.entity';

@Entity('transacciones_financieras')
export class TransaccionFinanciera {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 50 }) tipo!: string;
  @Column({ length: 100 }) categoria!: string;
  @Column({ type: 'double precision' }) monto!: number;
  @Column({ type: 'text', nullable: true }) descripcion!: string | null;
  @Column({ type: 'timestamp' }) fecha!: Date;
  @Column({ name: 'actividadId', type: 'int', nullable: true }) actividadId!: number | null;
  @Column({ name: 'insumoId', type: 'int', nullable: true }) insumoId!: number | null;
  @Column({ name: 'ventaId', type: 'int', nullable: true }) ventaId!: number | null;
  @Column({ name: 'usuarioId', type: 'int', nullable: true }) usuarioId!: number | null;

  @ManyToOne(() => Actividad, (actividad) => actividad.transaccionesFinancieras, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'actividadId' }) actividad!: Actividad | null;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt!: Date | null;
}
