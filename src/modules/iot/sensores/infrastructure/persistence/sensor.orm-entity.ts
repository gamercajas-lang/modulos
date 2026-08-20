import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity('sensores')
export class SensorOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: 'creado_en' })
  creadoEn: Date;

  @UpdateDateColumn({ name: 'actualizado_en' })
  actualizadoEn: Date;

  @DeleteDateColumn({ name: 'eliminado_en' })
  eliminadoEn: Date;

  @Column({ name: 'nombre_sensor' }) nombreSensor: string;
  @Column({ name: 'tipo_sensor_id' }) tipoSensorId: number;
  @Column() protocolo: string;
  @Column({ name: 'endpoint_url', nullable: true }) endpointUrl: string;
  @Column({ name: 'mqtt_topic', nullable: true }) mqttTopic: string;
  @Column({ name: 'valor_minimo_sensor', type: 'float' }) valorMinimoSensor: number;
  @Column({ name: 'valor_maximo_sensor', type: 'float' }) valorMaximoSensor: number;
  @Column({ default: true }) activo: boolean;
  @Column({ name: 'estado_conexion', nullable: true }) estadoConexion: string;
  @Column({ type: 'text', nullable: true }) estado: string;
  @Column({ name: 'ultimo_valor', nullable: true }) ultimoValor: string;
  @Column({ name: 'ultima_medicion', type: 'timestamp', nullable: true }) ultimaMedicion: Date;
  @Column({ name: 'last_seen_at', type: 'timestamp', nullable: true }) lastSeenAt: Date;
  @Column({ name: 'cultivoId', nullable: true }) cultivoId: number;
  @Column({ name: 'creadoPorUsuarioId', nullable: true }) creadoPorUsuarioId: number;
  @Column({ name: 'global_config_id' }) globalConfigId: number;
  @Column({ name: 'lote_id', nullable: true }) loteId: number;
  @Column({ name: 'sub_lote_id', nullable: true }) subLoteId: number;
}
