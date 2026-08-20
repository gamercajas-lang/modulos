import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity('iot_global_config')
export class IotGlobalConfigOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: 'creado_en' })
  creadoEn: Date;

  @UpdateDateColumn({ name: 'actualizado_en' })
  actualizadoEn: Date;

  @DeleteDateColumn({ name: 'eliminado_en' })
  eliminadoEn: Date;

  @Column() nombre: string;
  @Column() agente: string;
  @Column() puerto: number;
  @Column() protocolo: string;
  @Column({ name: 'prefijo_tema' }) prefijoTema: string;
  @Column({ name: 'temas_predeterminados', type: 'text', nullable: true }) temasPredeterminados: string;
  @Column({ name: 'temas_personalizados', type: 'text', nullable: true }) temasPersonalizados: string;
  @Column({ name: 'lote_id', nullable: true }) loteId: number;
  @Column({ name: 'sub_lote_id', nullable: true }) subLoteId: number;
  @Column({ name: 'nombre_usuario', nullable: true }) nombreUsuario: string;
  @Column({ nullable: true }) contrasena: string;
  @Column({ default: true }) activo: boolean;
  @Column({ name: 'sensores_predeterminados_inicializados', default: false }) sensoresPredeterminadosInicializados: boolean;
  @Column({ name: 'auto_discover', default: false }) autoDiscover: boolean;
}
