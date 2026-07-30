import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { CrearLoteUseCase } from '../../../application/use-cases/lote/crear-lote.use-case';
import { ListarLotesUseCase } from '../../../application/use-cases/lote/listar-lotes.use-case';
import { ObtenerLoteUseCase } from '../../../application/use-cases/lote/obtener-lote.use-case';
import { ActualizarLoteUseCase } from '../../../application/use-cases/lote/actualizar-lote.use-case';
import { EliminarLoteUseCase } from '../../../application/use-cases/lote/eliminar-lote.use-case';
import { CreateLoteDto } from '../../../application/dto/lote/create-lote.dto';
import { UpdateLoteDto } from '../../../application/dto/lote/update-lote.dto';

@Controller('lotes')
export class LotesController {
  constructor(
    private readonly crearLote: CrearLoteUseCase,
    private readonly listarLotes: ListarLotesUseCase,
    private readonly obtenerLote: ObtenerLoteUseCase,
    private readonly actualizarLote: ActualizarLoteUseCase,
    private readonly eliminarLote: EliminarLoteUseCase,
  ) {}

  @Post()
  create(@Body() dto: CreateLoteDto) {
    return this.crearLote.execute(dto);
  }

  @Get()
  findAll() {
    return this.listarLotes.execute();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const lote = await this.obtenerLote.execute(+id);
    if (!lote) throw new NotFoundException(`Lote con id ${id} no encontrado`);
    return lote;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateLoteDto) {
    const lote = await this.actualizarLote.execute(+id, dto);
    if (!lote) throw new NotFoundException(`Lote con id ${id} no encontrado`);
    return lote;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eliminarLote.execute(+id);
  }
}
