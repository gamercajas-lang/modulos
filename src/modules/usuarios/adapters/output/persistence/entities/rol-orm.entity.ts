import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { PermisoOrmEntity } from './permiso-orm.entity';
import { UsuarioOrmEntity } from './usuario-orm.entity';

@Entity('roles')
export class RolOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  nombre: string;

  @Column({ type: 'varchar', nullable: true })
  descripcion: string | null;

  @Column({ type: 'boolean', name: 'es_sistema', default: false })
  esSistema: boolean;

  @Column({ type: 'varchar', nullable: true })
  estado: string;

  // Tabla puente rol_permisos, modelada como many-to-many sin entidad propia
  @ManyToMany(() => PermisoOrmEntity, (permiso) => permiso.roles)
  @JoinTable({
    name: 'rol_permisos',
    joinColumn: { name: 'rolId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'permisoId', referencedColumnName: 'id' },
  })
  permisos: PermisoOrmEntity[];

  @OneToMany(() => UsuarioOrmEntity, (usuario) => usuario.rol)
  usuarios: UsuarioOrmEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date | null;
}
