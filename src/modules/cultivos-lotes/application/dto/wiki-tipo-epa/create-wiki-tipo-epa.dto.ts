import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateWikiTipoEpaDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsString()
  @IsNotEmpty()
  tipoEpaEnum: string;
}
