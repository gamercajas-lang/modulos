import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { InsumoEntity } from './insumo.entity';

@Entity('categorias')
export class CategoriaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  nombre: string;

  @Column({ type: 'varchar', nullable: true })
  descripcion: string;

  @Column({ type: 'varchar', name: 'tipo_insumo', nullable: true })
  tipoInsumo: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at', nullable: true })
  deletedAt: Date;

  @OneToMany(() => InsumoEntity, (insumo) => insumo.categoria)
  insumos: InsumoEntity[];
}
