import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { UsuarioOrmEntity } from './usuario-orm.entity';

@Entity('email_codes')
export class EmailCodeOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer', name: 'usuarioId' })
  usuarioId: number;

  @ManyToOne(() => UsuarioOrmEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'usuarioId' })
  usuario: UsuarioOrmEntity;

  @Column({ type: 'varchar', length: 10 })
  tipo: string;

  @Column({ type: 'varchar', length: 6 })
  code: string;

  @Column({ type: 'timestamp', name: 'expiresAt' })
  expiresAt: Date;

  @Column({ type: 'timestamp', nullable: true, name: 'usedAt' })
  usedAt: Date | null;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date | null;
}
