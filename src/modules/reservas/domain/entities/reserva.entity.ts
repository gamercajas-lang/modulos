import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('reservas')
export class Reserva {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  insumoId!: number;

  @Column('double precision')
  cantidad!: number;

  @Column({ type: 'date' })
  fechaReserva!: Date;

  @Column()
  motivo!: string;

  @Column()
  estado!: string;

  @Column()
  usuarioId!: number;

  @Column()
  actividadId!: number;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @DeleteDateColumn()
  deleted_at!: Date;
}