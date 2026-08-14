import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { AlmacenEntity } from './almacen.entity';
import { CategoriaEntity } from './categoria.entity';

@Entity('insumos')
export class InsumoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'varchar', name: 'foto_url', nullable: true })
  fotoUrl: string;

  @Column({ type: 'varchar', name: 'presentacion_tipo', nullable: true })
  presentacionTipo: string;

  @Column({ type: 'double precision', name: 'presentacion_cantidad', nullable: true })
  presentacionCantidad: number;

  @Column({ type: 'varchar', name: 'presentacion_unidad', nullable: true })
  presentacionUnidad: string;

  @Column({ type: 'varchar', name: 'unidad_uso', nullable: true })
  unidadUso: string;

  @Column({ type: 'varchar', name: 'tipo_materia', nullable: true })
  tipoMateria: string;

  @Column({ type: 'double precision', name: 'factor_conversion_uso', nullable: true })
  factorConversionUso: number;

  @Column({ type: 'double precision', name: 'stock_presentacion', nullable: true })
  stockPresentacion: number;

  @Column({ type: 'double precision', name: 'stock_uso', nullable: true })
  stockUso: number;

  @Column({ type: 'double precision', name: 'precio_unitario_presentacion', nullable: true })
  precioUnitarioPresentacion: number;

  @Column({ type: 'double precision', name: 'precio_unitario_uso', nullable: true })
  precioUnitarioUso: number;

  @Column({ type: 'double precision', name: 'valor_inventario', nullable: true })
  valorInventario: number;

  @Column({ type: 'integer', name: 'almacen_id' })
  almacenId: number;

  /**
   * Clave foránea lógica hacia el módulo 'Proveedores' (tabla: proveedores).
   * Mantenido como integer sin relación directa TypeORM para desacoplamiento modular.
   */
  @Column({ type: 'integer', name: 'proveedor_id', nullable: true, comment: 'FK lógica -> módulo proveedores (proveedores.id)' })
  proveedorId: number;

  @Column({ type: 'integer', name: 'categoria_id' })
  categoriaId: number;

  @Column({ type: 'timestamp', name: 'fecha_registro', nullable: true })
  fechaRegistro: Date;

  /**
   * Clave foránea lógica hacia el módulo 'Usuarios' (tabla: usuarios).
   * Mantenido como integer sin relación directa TypeORM para desacoplamiento modular.
   */
  @Column({ type: 'integer', name: 'creado_por_usuario_id', nullable: true, comment: 'FK lógica -> módulo usuarios (usuarios.id)' })
  creadoPorUsuarioId: number;

  @Column({ type: 'varchar', name: 'tipo_insumo', nullable: true })
  tipoInsumo: string;

  @Column({ type: 'double precision', name: 'costo_adquisicion', nullable: true })
  costoAdquisicion: number;

  @Column({ type: 'double precision', name: 'valor_residual', nullable: true })
  valorResidual: number;

  @Column({ type: 'double precision', name: 'vida_util_horas', nullable: true })
  vidaUtilHoras: number;

  @Column({ type: 'double precision', name: 'horas_usadas', nullable: true })
  horasUsadas: number;

  @Column({ type: 'double precision', name: 'stock_reservado', nullable: true })
  stockReservado: number;

  @Column({ type: 'double precision', name: 'depreciacion_acumulada', nullable: true })
  depreciacionAcumulada: number;

  @Column({ type: 'integer', name: 'stock_minimo', nullable: true })
  stockMinimo: number;

  @Column({ type: 'varchar', nullable: true })
  estado: string;

  @Column({ type: 'numeric', precision: 10, scale: 2, name: 'costo_unitario', nullable: true })
  costoUnitario: number;

  @Column({ type: 'date', name: 'fecha_adquisicion', nullable: true })
  fechaAdquisicion: Date;

  @Column({ type: 'date', name: 'fecha_ultimo_mantenimiento', nullable: true })
  fechaUltimoMantenimiento: Date;

  @Column({ type: 'date', name: 'fecha_baja', nullable: true })
  fechaBaja: Date;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at', nullable: true })
  deletedAt: Date;

  @ManyToOne(() => AlmacenEntity, (almacen) => almacen.insumos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'almacen_id' })
  almacen: AlmacenEntity;

  @ManyToOne(() => CategoriaEntity, (categoria) => categoria.insumos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'categoria_id' })
  categoria: CategoriaEntity;
}
