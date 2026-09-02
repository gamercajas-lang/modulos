import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateProveedorDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  nombre!: string;
}