import { IsBoolean, IsInt, IsNotEmpty, IsObject, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateNotificacionDto {
  @IsInt()
  usuarioId: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  titulo: string;

  @IsOptional()
  @IsString()
  mensaje?: string;

  @IsOptional()
  @IsBoolean()
  leida?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  tipo?: string;

  @IsOptional()
  @IsObject()
  metadata?: Record<string, any>;
}
