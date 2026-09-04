import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ActividadHistorial } from './actividad-historial.entity';
import { ActividadResponsable } from './actividad-responsable.entity';
import { ActividadServicio } from './actividad-servicio.entity';
import { ActividadHerramienta } from './actividad-herramienta.entity';
import { ActividadEvidencia } from './actividad-evidencia.entity';
import { UsoHerramienta } from './uso-herramienta.entity';
import { TransaccionFinanciera } from './transaccion-financiera.entity';

@Entity('actividades')
export class Actividad {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 150 }) nombre!: string;
  @Column({ length: 100 }) tipo!: string;
  @Column({ type: 'varchar', length: 100, nullable: true }) subtipo!: string | null;
  @Column({ name: 'loteId', type: 'int', nullable: true }) loteId!: number | null;
  @Column({ name: 'subLoteId', type: 'int', nullable: true }) subLoteId!: number | null;
  @Column({ name: 'cultivoId', type: 'int', nullable: true }) cultivoId!: number | null;
  @Column({ type: 'timestamp' }) fecha!: Date;
  @Column({ type: 'double precision', nullable: true }) horasActividad!: number | null;
  @Column({ type: 'double precision', nullable: true }) precioHoraActividad!: number | null;
  @Column({ type: 'double precision', nullable: true }) costoManoObra!: number | null;
  @Column({ type: 'text', nullable: true }) descripcion!: string | null;
  @Column({ length: 50 }) estado!: string;
  @Column({ name: 'creado_por_usuario_id', type: 'int', nullable: true }) creadoPorUsuarioId!: number | null;
  @Column({ type: 'int', nullable: true }) cantidadPlantas!: number | null;
  @Column({ type: 'double precision', nullable: true }) kgRecolectados!: number | null;
  @Column({ name: 'productoAgroId', type: 'int', nullable: true }) productoAgroId!: number | null;

  @CreateDateColumn({ name: 'created_at' }) createdAt!: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt!: Date;
  @DeleteDateColumn({ name: 'deleted_at', nullable: true }) deletedAt!: Date | null;

  @OneToMany(() => ActividadHistorial, (item) => item.actividad) historial!: ActividadHistorial[];
  @OneToMany(() => ActividadResponsable, (item) => item.actividad) responsables!: ActividadResponsable[];
  @OneToMany(() => ActividadServicio, (item) => item.actividad) servicios!: ActividadServicio[];
  @OneToMany(() => ActividadHerramienta, (item) => item.actividad) herramientas!: ActividadHerramienta[];
  @OneToMany(() => ActividadEvidencia, (item) => item.actividad) evidencias!: ActividadEvidencia[];
  @OneToMany(() => UsoHerramienta, (item) => item.actividad) usosHerramientas!: UsoHerramienta[];
  @OneToMany(() => TransaccionFinanciera, (item) => item.actividad) transaccionesFinancieras!: TransaccionFinanciera[];
}
