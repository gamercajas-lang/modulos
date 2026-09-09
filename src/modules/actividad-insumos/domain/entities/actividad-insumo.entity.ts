import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('actividad_insumos')
export class ActividadInsumo {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  actividad_id!: number;

  @Column()
  insumo_id!: number;

  @Column('double precision')
  cantidad_usada!: number;

  @Column({
    type: 'varchar',
    length: 100,
  })
  unidad!: string;

  @Column('double precision')
  costo_unitario!: number;

  @Column('double precision')
  costo_total!: number;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  created_at!: Date;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  updated_at!: Date;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  deleted_at!: Date;
}