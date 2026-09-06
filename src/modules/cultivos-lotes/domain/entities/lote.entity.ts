import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Sublote } from './sublote.entity';
import { Cultivo } from './cultivo.entity';

@Entity('lotes')
export class Lote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  nombre: string;

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

  @OneToMany(() => Sublote, (sublote) => sublote.lote)
  sublotes: Sublote[];

  @OneToMany(() => Cultivo, (cultivo) => cultivo.lote)
  cultivos: Cultivo[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
