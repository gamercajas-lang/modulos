import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { RolOrmEntity } from './rol-orm.entity';
import { UsuarioOrmEntity } from './usuario-orm.entity';

/**
 * Entidad de persistencia (TypeORM) de Permiso.
 * Independiente de la entidad de dominio Permiso; el mapeo entre
 * ambas se realiza en PermisoTypeOrmRepository.
 */
@Entity('permisos')
export class PermisoOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  modulo: string;

  @Column({ type: 'varchar' })
  accion: string;

  @Column({ type: 'varchar' })
  clave: string;

  @ManyToMany(() => RolOrmEntity, (rol) => rol.permisos)
  roles: RolOrmEntity[];

  @ManyToMany(() => UsuarioOrmEntity, (usuario) => usuario.permisos)
  usuarios: UsuarioOrmEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date | null;
}
