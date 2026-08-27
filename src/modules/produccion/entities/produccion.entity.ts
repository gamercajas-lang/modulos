import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

// ⚠️ STUB TEMPORAL — reemplazar por el entity real que entregue el equipo
// de Producción/Inventario (P3). Mantén el nombre de clase "Produccion" y
// la tabla "produccion" para no romper las referencias de otros módulos,
// o actualiza esas referencias si el nombre real difiere.
@Entity('produccion')
export class Produccion {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 150 })
  nombre: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  stockDisponible: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
