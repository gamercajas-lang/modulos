import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('actividades_insumos_reserva')
export class ActividadInsumoReserva {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'int',
  })
  actividad_insumo_id!: number;

  @Column({
    type: 'int',
  })
  reserva_id!: number;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  created_at!: Date;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  updated_at!: Date;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  deleted_at!: Date;
}