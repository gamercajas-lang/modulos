import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Lote } from './lote.entity';
import { Cultivo } from './cultivo.entity';

@Entity('sublotes')
export class Sublote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  nombre: string;

  @ManyToOne(() => Lote, (lote) => lote.sublotes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'lote_id' })
  lote: Lote;

  @Column({
    type: 'geometry',
    spatialFeatureType: 'Polygon',
    srid: 4326,
    nullable: true,
  })
  geom: string;

  @Column({ type: 'numeric', precision: 12, scale: 2, nullable: true, name: 'areaM2' })
  areaM2: number;

  @Column({ type: 'numeric', precision: 12, scale: 4, nullable: true, name: 'areaHa' })
  areaHa: number;

  @Column({
    type: 'geometry',
    spatialFeatureType: 'Point',
    srid: 4326,
    nullable: true,
  })
  centroide: string;

  @Column({ type: 'varchar', nullable: true })
  descripcion: string;

  @Column({ type: 'varchar', nullable: true })
  estado: string;

  @OneToMany(() => Cultivo, (cultivo) => cultivo.sublote)
  cultivos: Cultivo[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
