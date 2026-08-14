import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Epa } from './epa.entity';

@Entity('tipos_cultivos_wiki')
export class TipoCultivoWiki {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @ManyToMany(() => Epa, (epa) => epa.tiposCultivosWiki)
  epas: Epa[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
