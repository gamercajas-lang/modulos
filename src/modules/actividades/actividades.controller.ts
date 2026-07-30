import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseUUIDPipe,
  // Req,
  // UseGuards,
} from '@nestjs/common';
import { ActividadesService } from './actividades.service';
import { CreateActividadDto } from './dto/create-actividad.dto';
import { UpdateActividadDto } from './dto/update-actividad.dto';

// ⚠️ Cuando P1 (Usuarios/Auth) tenga el guard de JWT listo, descomenta
// y usa @UseGuards(JwtAuthGuard) + @Req() req para sacar el usuario autenticado
// en vez de recibirlo/simularlo.

@Controller('actividades')
export class ActividadesController {
  constructor(private readonly actividadesService: ActividadesService) {}

  @Post()
  create(@Body() dto: CreateActividadDto /*, @Req() req */) {
    const usuarioId = dto.responsableId; // TODO: reemplazar por req.user.id cuando exista Auth
    return this.actividadesService.create(dto, usuarioId);
  }

  @Get()
  findAll(@Query('loteId') loteId?: string, @Query('estado') estado?: string) {
    return this.actividadesService.findAll(loteId, estado);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.actividadesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateActividadDto) {
    return this.actividadesService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.actividadesService.remove(id);
  }
}
