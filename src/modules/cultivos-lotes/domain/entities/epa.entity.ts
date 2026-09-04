import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { TipoCultivoWiki } from './tipo-cultivo-wiki.entity';

// Enfermedades, Plagas y Adversidades (EPA).
// La relación con TipoCultivoWiki es N:M pura (tabla epa_tipos_cultivos_wiki,
// sin columnas propias más allá de las FK), por eso se modela con
// @ManyToMany + @JoinTable en vez de una entidad intermedia explícita.
@Entity('epas')
export class Epa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  nombre: string;

  @Column({ type: 'varchar', name: 'tipoEpa' })
  tipoEpa: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'text', nullable: true })
  sintomas: string;

  @Column({ type: 'text', nullable: true, name: 'manejoYControl' })
  manejoYControl: string;

  @Column({ type: 'int', array: true, nullable: true, name: 'mesesProbables' })
  mesesProbables: number[];

  @Column({ type: 'text', array: true, nullable: true })
  temporadas: string[];

  @Column({ type: 'text', nullable: true, name: 'notasEstacionalidad' })
  notasEstacionalidad: string;

  @Column({ type: 'text', array: true, nullable: true, name: 'fotosSintomas' })
  fotosSintomas: string[];

  @Column({ type: 'text', array: true, nullable: true, name: 'fotosGenerales' })
  fotosGenerales: string[];

  @Column({ type: 'text', array: true, nullable: true })
  tags: string[];

  // Referencia simple al usuario autor (el módulo de usuarios pertenece a Persona 1)
  @Column({ type: 'int', nullable: true, name: 'creadoPorUsuarioId' })
  creadoPorUsuarioId: number;

  @ManyToMany(() => TipoCultivoWiki, (tipoCultivoWiki) => tipoCultivoWiki.epas)
  @JoinTable({
    name: 'epa_tipos_cultivos_wiki',
    joinColumn: { name: 'epaId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'tipoCultivoWikiId', referencedColumnName: 'id' },
  })
  tiposCultivosWiki: TipoCultivoWiki[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
