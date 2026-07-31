import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { LoteProduccionEntity } from './lote-produccion.entity';

@Entity('productos_agro')
export class ProductoAgroEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  nombre: string;

  @Column({ type: 'varchar', name: 'unidad_base' })
  unidadBase: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'text', nullable: true })
  imagen: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at', nullable: true })
  deletedAt: Date;

  @OneToMany(() => LoteProduccionEntity, (lote) => lote.productoAgro)
  lotesProduccion: LoteProduccionEntity[];
}
