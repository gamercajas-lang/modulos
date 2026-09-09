import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Incidencia {

  @PrimaryGeneratedColumn()
  id_incidencia!: number;

  @Column()
  id_cultivo_real!: number;

  @Column({ type: 'date' })
  fecha!: Date;

  @Column()
  tipo_incidencia!: string;

  @Column()
  gravedad!: string;

  @Column('text')
  descripcion!: string;

  @Column()
  id_usuario_reporta!: number;

  @Column()
  estado!: string;


}

