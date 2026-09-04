import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CrearProgramaFormacionUseCase } from '../../../application/use-cases/programa-formacion/crear-programa-formacion.use-case';
import { ListarProgramasFormacionUseCase } from '../../../application/use-cases/programa-formacion/listar-programas-formacion.use-case';
import { ObtenerProgramaFormacionUseCase } from '../../../application/use-cases/programa-formacion/obtener-programa-formacion.use-case';
import { ActualizarProgramaFormacionUseCase } from '../../../application/use-cases/programa-formacion/actualizar-programa-formacion.use-case';
import { EliminarProgramaFormacionUseCase } from '../../../application/use-cases/programa-formacion/eliminar-programa-formacion.use-case';
import { CreateProgramaFormacionDto } from '../../../application/dto/programa-formacion/create-programa-formacion.dto';
import { UpdateProgramaFormacionDto } from '../../../application/dto/programa-formacion/update-programa-formacion.dto';

@Controller('programas-formacion')
export class ProgramasFormacionController {
  constructor(
    private readonly crearProgramaFormacion: CrearProgramaFormacionUseCase,
    private readonly listarProgramasFormacion: ListarProgramasFormacionUseCase,
    private readonly obtenerProgramaFormacion: ObtenerProgramaFormacionUseCase,
    private readonly actualizarProgramaFormacion: ActualizarProgramaFormacionUseCase,
    private readonly eliminarProgramaFormacion: EliminarProgramaFormacionUseCase,
  ) {}

  @Post()
  create(@Body() dto: CreateProgramaFormacionDto) {
    return this.crearProgramaFormacion.execute(dto);
  }

  @Get()
  findAll() {
    return this.listarProgramasFormacion.execute();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const programa = await this.obtenerProgramaFormacion.execute(+id);
    if (!programa) throw new NotFoundException(`Programa de formacion con id ${id} no encontrado`);
    return programa;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateProgramaFormacionDto) {
    const programa = await this.actualizarProgramaFormacion.execute(+id, dto);
    if (!programa) throw new NotFoundException(`Programa de formacion con id ${id} no encontrado`);
    return programa;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eliminarProgramaFormacion.execute(+id);
  }
}
