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
import { CrearTipoCultivoWikiUseCase } from '../../../application/use-cases/tipo-cultivo-wiki/crear-tipo-cultivo-wiki.use-case';
import { ListarTiposCultivosWikiUseCase } from '../../../application/use-cases/tipo-cultivo-wiki/listar-tipos-cultivos-wiki.use-case';
import { ObtenerTipoCultivoWikiUseCase } from '../../../application/use-cases/tipo-cultivo-wiki/obtener-tipo-cultivo-wiki.use-case';
import { ActualizarTipoCultivoWikiUseCase } from '../../../application/use-cases/tipo-cultivo-wiki/actualizar-tipo-cultivo-wiki.use-case';
import { EliminarTipoCultivoWikiUseCase } from '../../../application/use-cases/tipo-cultivo-wiki/eliminar-tipo-cultivo-wiki.use-case';
import { CreateTipoCultivoWikiDto } from '../../../application/dto/tipo-cultivo-wiki/create-tipo-cultivo-wiki.dto';
import { UpdateTipoCultivoWikiDto } from '../../../application/dto/tipo-cultivo-wiki/update-tipo-cultivo-wiki.dto';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller('tipos-cultivos-wiki')
@UseGuards(JwtAuthGuard)
export class TiposCultivosWikiController {
  constructor(
    private readonly crearTipoCultivoWiki: CrearTipoCultivoWikiUseCase,
    private readonly listarTiposCultivosWiki: ListarTiposCultivosWikiUseCase,
    private readonly obtenerTipoCultivoWiki: ObtenerTipoCultivoWikiUseCase,
    private readonly actualizarTipoCultivoWiki: ActualizarTipoCultivoWikiUseCase,
    private readonly eliminarTipoCultivoWiki: EliminarTipoCultivoWikiUseCase,
  ) {}

  @Post()
  create(@Body() dto: CreateTipoCultivoWikiDto) {
    return this.crearTipoCultivoWiki.execute(dto);
  }

  @Get()
  findAll() {
    return this.listarTiposCultivosWiki.execute();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const tipoCultivoWiki = await this.obtenerTipoCultivoWiki.execute(+id);
    if (!tipoCultivoWiki)
      throw new NotFoundException(`TipoCultivoWiki con id ${id} no encontrado`);
    return tipoCultivoWiki;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateTipoCultivoWikiDto) {
    const tipoCultivoWiki = await this.actualizarTipoCultivoWiki.execute(+id, dto);
    if (!tipoCultivoWiki)
      throw new NotFoundException(`TipoCultivoWiki con id ${id} no encontrado`);
    return tipoCultivoWiki;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eliminarTipoCultivoWiki.execute(+id);
  }
}
