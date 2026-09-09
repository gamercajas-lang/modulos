import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('proveedores')
export class Proveedor {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'varchar',
    length: 255,
  })
  nombre!: string;

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