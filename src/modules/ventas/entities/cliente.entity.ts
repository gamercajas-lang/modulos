import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 150 }) nombre!: string;
  @Column({ length: 100 }) identificacion!: string;
  @Column({ type: 'varchar', length: 30, nullable: true }) telefono!: string | null;
  @Column({ type: 'varchar', length: 150, nullable: true }) email!: string | null;
  @Column({ type: 'varchar', length: 200, nullable: true }) direccion!: string | null;
  @Column({ type: 'text', nullable: true }) notas!: string | null;

  @CreateDateColumn({ name: 'created_at' }) createdAt!: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt!: Date;
  @DeleteDateColumn({ name: 'deleted_at', nullable: true }) deletedAt!: Date | null;
}
