import { SeedExecutionLog } from '../entities/seed-execution-log.entity';

export interface SeedExecutionLogRepositoryPort {
  save(log: SeedExecutionLog): Promise<SeedExecutionLog>;
  findAll(): Promise<SeedExecutionLog[]>;
  findBySeedName(seedName: string): Promise<SeedExecutionLog | null>;
  delete(id: number): Promise<void>;
}

export const SEED_EXECUTION_LOG_REPOSITORY = Symbol('SEED_EXECUTION_LOG_REPOSITORY');
