import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

// ⚠️ STUB TEMPORAL — reemplazar por el entity real que entregue el equipo
// de Proveedores-Insumos (P4). Mantén el nombre de clase "Insumo" y la
// tabla "insumos" para no romper las referencias de otros módulos, o
// actualiza esas referencias si el nombre real difiere.
@Entity('insumos')
export class Insumo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 150 })
  nombre: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  unidadMedida: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
