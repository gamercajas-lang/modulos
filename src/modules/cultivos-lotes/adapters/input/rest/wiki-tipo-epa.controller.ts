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
import { CrearWikiTipoEpaUseCase } from '../../../application/use-cases/wiki-tipo-epa/crear-wiki-tipo-epa.use-case';
import { ListarWikiTipoEpaUseCase } from '../../../application/use-cases/wiki-tipo-epa/listar-wiki-tipo-epa.use-case';
import { ObtenerWikiTipoEpaUseCase } from '../../../application/use-cases/wiki-tipo-epa/obtener-wiki-tipo-epa.use-case';
import { ActualizarWikiTipoEpaUseCase } from '../../../application/use-cases/wiki-tipo-epa/actualizar-wiki-tipo-epa.use-case';
import { EliminarWikiTipoEpaUseCase } from '../../../application/use-cases/wiki-tipo-epa/eliminar-wiki-tipo-epa.use-case';
import { CreateWikiTipoEpaDto } from '../../../application/dto/wiki-tipo-epa/create-wiki-tipo-epa.dto';
import { UpdateWikiTipoEpaDto } from '../../../application/dto/wiki-tipo-epa/update-wiki-tipo-epa.dto';

@Controller('wiki-tipo-epa')
export class WikiTipoEpaController {
  constructor(
    private readonly crearWikiTipoEpa: CrearWikiTipoEpaUseCase,
    private readonly listarWikiTipoEpa: ListarWikiTipoEpaUseCase,
    private readonly obtenerWikiTipoEpa: ObtenerWikiTipoEpaUseCase,
    private readonly actualizarWikiTipoEpa: ActualizarWikiTipoEpaUseCase,
    private readonly eliminarWikiTipoEpa: EliminarWikiTipoEpaUseCase,
  ) {}

  @Post()
  create(@Body() dto: CreateWikiTipoEpaDto) {
    return this.crearWikiTipoEpa.execute(dto);
  }

  @Get()
  findAll() {
    return this.listarWikiTipoEpa.execute();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const wikiTipoEpa = await this.obtenerWikiTipoEpa.execute(+id);
    if (!wikiTipoEpa)
      throw new NotFoundException(`WikiTipoEpa con id ${id} no encontrado`);
    return wikiTipoEpa;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateWikiTipoEpaDto) {
    const wikiTipoEpa = await this.actualizarWikiTipoEpa.execute(+id, dto);
    if (!wikiTipoEpa)
      throw new NotFoundException(`WikiTipoEpa con id ${id} no encontrado`);
    return wikiTipoEpa;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eliminarWikiTipoEpa.execute(+id);
  }
}
