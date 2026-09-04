import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinColumn,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { RolOrmEntity } from './rol-orm.entity';
import { PermisoOrmEntity } from './permiso-orm.entity';
import { ProgramaFormacionOrmEntity } from './programa-formacion-orm.entity';

@Entity('usuarios')
export class UsuarioOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  nombre: string;

  @Column({ type: 'varchar' })
  apellido: string;

  @Column({ type: 'varchar' })
  identificacion: string;

  @Column({ type: 'varchar', nullable: true, name: 'idFicha' })
  idFicha: string | null;

  @Column({ type: 'integer', nullable: true, name: 'programaFormacionId' })
  programaFormacionId: number | null;

  @ManyToOne(() => ProgramaFormacionOrmEntity, (programa) => programa.usuarios, {
    onDelete: 'SET NULL',
    nullable: true,
  })
  @JoinColumn({ name: 'programaFormacionId' })
  programaFormacion: ProgramaFormacionOrmEntity;

  @Column({ type: 'varchar', nullable: true })
  telefono: string | null;

  @Column({ type: 'varchar' })
  correo: string;

  @Column({ type: 'varchar', name: 'passwordHash' })
  passwordHash: string;

  @Column({ type: 'timestamp', nullable: true, name: 'emailVerifiedAt' })
  emailVerifiedAt: Date | null;

  @Column({ type: 'varchar', nullable: true })
  estado: string;

  @Column({ type: 'timestamp', nullable: true, name: 'lastLoginAt' })
  lastLoginAt: Date | null;

  @Column({ type: 'varchar', nullable: true, name: 'avatarUrl' })
  avatarUrl: string | null;

  @Column({ type: 'integer', nullable: true, name: 'rolId' })
  rolId: number | null;

  @ManyToOne(() => RolOrmEntity, (rol) => rol.usuarios, {
    onDelete: 'SET NULL',
    nullable: true,
  })
  @JoinColumn({ name: 'rolId' })
  rol: RolOrmEntity;

  // Tabla puente usuarios_permisos, modelada como many-to-many sin entidad propia
  @ManyToMany(() => PermisoOrmEntity, (permiso) => permiso.usuarios)
  @JoinTable({
    name: 'usuarios_permisos',
    joinColumn: { name: 'usuarioId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'permisoId', referencedColumnName: 'id' },
  })
  permisos: PermisoOrmEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date | null;
}
