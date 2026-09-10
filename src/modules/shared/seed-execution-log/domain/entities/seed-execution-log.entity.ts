export class SeedExecutionLog {
  constructor(
    public readonly id: number | null,
    public seedName: string,
    public executedAt: Date,
    public description: string | null,
  ) {}
}
