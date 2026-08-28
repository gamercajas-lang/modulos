import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { CrearEpaUseCase } from '../../../application/use-cases/epa/crear-epa.use-case';
import { ListarEpasUseCase } from '../../../application/use-cases/epa/listar-epas.use-case';
import { ObtenerEpaUseCase } from '../../../application/use-cases/epa/obtener-epa.use-case';
import { ActualizarEpaUseCase } from '../../../application/use-cases/epa/actualizar-epa.use-case';
import { EliminarEpaUseCase } from '../../../application/use-cases/epa/eliminar-epa.use-case';
import { CreateEpaDto } from '../../../application/dto/epa/create-epa.dto';
import { UpdateEpaDto } from '../../../application/dto/epa/update-epa.dto';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller('epas')
@UseGuards(JwtAuthGuard)
export class EpasController {
  constructor(
    private readonly crearEpa: CrearEpaUseCase,
    private readonly listarEpas: ListarEpasUseCase,
    private readonly obtenerEpa: ObtenerEpaUseCase,
    private readonly actualizarEpa: ActualizarEpaUseCase,
    private readonly eliminarEpa: EliminarEpaUseCase,
  ) {}

  @Post()
  create(@Body() dto: CreateEpaDto) {
    return this.crearEpa.execute(dto);
  }

  @Get()
  findAll() {
    return this.listarEpas.execute();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const epa = await this.obtenerEpa.execute(+id);
    if (!epa) throw new NotFoundException(`Epa con id ${id} no encontrada`);
    return epa;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateEpaDto) {
    const epa = await this.actualizarEpa.execute(+id, dto);
    if (!epa) throw new NotFoundException(`Epa con id ${id} no encontrada`);
    return epa;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eliminarEpa.execute(+id);
  }
}
