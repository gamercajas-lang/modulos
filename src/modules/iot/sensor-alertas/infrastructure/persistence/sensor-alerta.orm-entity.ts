import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity('sensor_alertas')
export class SensorAlertaOrmEntity {
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
  @Column({ type: 'float' }) umbral: number;
  @Column({ type: 'varchar', length: 10 }) tipo: string;
  @Column({ name: 'fecha_alerta', type: 'timestamp' }) fechaAlerta: Date;
  @Column({ name: 'lote_id', nullable: true }) loteId: number;
  @Column({ name: 'sub_lote_id', nullable: true }) subLoteId: number;
}
