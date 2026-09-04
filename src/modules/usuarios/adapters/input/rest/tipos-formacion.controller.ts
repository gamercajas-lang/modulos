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
import { CrearTipoFormacionUseCase } from '../../../application/use-cases/tipo-formacion/crear-tipo-formacion.use-case';
import { ListarTiposFormacionUseCase } from '../../../application/use-cases/tipo-formacion/listar-tipos-formacion.use-case';
import { ObtenerTipoFormacionUseCase } from '../../../application/use-cases/tipo-formacion/obtener-tipo-formacion.use-case';
import { ActualizarTipoFormacionUseCase } from '../../../application/use-cases/tipo-formacion/actualizar-tipo-formacion.use-case';
import { EliminarTipoFormacionUseCase } from '../../../application/use-cases/tipo-formacion/eliminar-tipo-formacion.use-case';
import { CreateTipoFormacionDto } from '../../../application/dto/tipo-formacion/create-tipo-formacion.dto';
import { UpdateTipoFormacionDto } from '../../../application/dto/tipo-formacion/update-tipo-formacion.dto';

@Controller('tipos-formacion')
export class TiposFormacionController {
  constructor(
    private readonly crearTipoFormacion: CrearTipoFormacionUseCase,
    private readonly listarTiposFormacion: ListarTiposFormacionUseCase,
    private readonly obtenerTipoFormacion: ObtenerTipoFormacionUseCase,
    private readonly actualizarTipoFormacion: ActualizarTipoFormacionUseCase,
    private readonly eliminarTipoFormacion: EliminarTipoFormacionUseCase,
  ) {}

  @Post()
  create(@Body() dto: CreateTipoFormacionDto) {
    return this.crearTipoFormacion.execute(dto);
  }

  @Get()
  findAll() {
    return this.listarTiposFormacion.execute();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const tipo = await this.obtenerTipoFormacion.execute(+id);
    if (!tipo) throw new NotFoundException(`Tipo de formacion con id ${id} no encontrado`);
    return tipo;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateTipoFormacionDto) {
    const tipo = await this.actualizarTipoFormacion.execute(+id, dto);
    if (!tipo) throw new NotFoundException(`Tipo de formacion con id ${id} no encontrado`);
    return tipo;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eliminarTipoFormacion.execute(+id);
  }
}
