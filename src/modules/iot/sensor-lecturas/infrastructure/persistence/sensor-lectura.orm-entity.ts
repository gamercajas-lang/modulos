import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity('sensor_lecturas')
export class SensorLecturaOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: 'creado_en' })
  creadoEn: Date;

  @UpdateDateColumn({ name: 'actualizado_en' })
  actualizadoEn: Date;

  @DeleteDateColumn({ name: 'eliminado_en' })
  eliminadoEn: Date;

  @Column({ name: 'sensor_id' }) sensorId: number;
  @Column({ type: 'float' }) valor: number;
  @Column({ name: 'fecha_lectura', type: 'timestamptz' }) fechaLectura: Date;
  @Column({ nullable: true }) unidad: string;
  @Column({ nullable: true }) observaciones: string;
}
