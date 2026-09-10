import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('seed_execution_log')
export class SeedExecutionLogOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'seed_name', unique: true }) seedName: string;
  @CreateDateColumn({ name: 'executed_at' }) executedAt: Date;
  @Column({ nullable: true }) description: string;
}
