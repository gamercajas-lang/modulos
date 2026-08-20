import { IsString, IsOptional } from 'class-validator';

export class CrearSeedExecutionLogDto {
  @IsString()
  seedName: string;

  @IsOptional()
  @IsString()
  description?: string;
}
