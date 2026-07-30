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
import { Cultivo } from './cultivo.entity';

@Entity('cultivo_historial')
export class CultivoHistorial {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cultivo, (cultivo) => cultivo.historial, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'cultivo_id' })
  cultivo: Cultivo;

  // Referencia simple al usuario autor (el módulo de usuarios pertenece a Persona 1)
  @Column({ type: 'int', name: 'usuario_id' })
  usuarioId: number;

  @Column({ type: 'text', nullable: true })
  motivo: string;

  @Column({ type: 'jsonb', nullable: true })
  cambios: Record<string, any>;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
