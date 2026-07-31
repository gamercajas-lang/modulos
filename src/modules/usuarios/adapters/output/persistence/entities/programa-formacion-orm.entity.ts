import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { UsuarioOrmEntity } from './usuario-orm.entity';

@Entity('programas_formacion')
export class ProgramaFormacionOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20, name: 'numeroFicha' })
  numeroFicha: string;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  tipo: string | null;

  @Column({ type: 'text', nullable: true })
  descripcion: string | null;

  @Column({ type: 'date', nullable: true, name: 'fechaInicio' })
  fechaInicio: Date | null;

  @Column({ type: 'date', nullable: true, name: 'fechaFin' })
  fechaFin: Date | null;

  @Column({ type: 'varchar', nullable: true })
  estado: string;

  @Column({ type: 'integer', default: 0, name: 'cantidadAprendices' })
  cantidadAprendices: number;

  @OneToMany(() => UsuarioOrmEntity, (usuario) => usuario.programaFormacion)
  usuarios: UsuarioOrmEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date | null;
}
