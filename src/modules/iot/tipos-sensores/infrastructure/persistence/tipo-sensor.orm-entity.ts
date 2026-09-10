import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity('tipos_sensores')
export class TipoSensorOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @Column() nombre: string;
  @Column() unidad: string;
  @Column() decimales: number;
  @Column({ nullable: true }) descripcion: string;
  @Column({ nullable: true }) imagen: string;
  @Column({ name: 'ttl_minutos' }) ttlMinutos: number;
}
