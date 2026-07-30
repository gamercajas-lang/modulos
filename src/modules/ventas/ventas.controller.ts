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
} from '@nestjs/common';
import { VentasService } from './ventas.service';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';

// ⚠️ Igual que en Actividades: cuando P1 tenga Auth/JWT listo,
// usar @UseGuards(JwtAuthGuard) + @Req() req.user.id en vez de vendedorId del body.

@Controller('ventas')
export class VentasController {
  constructor(private readonly ventasService: VentasService) {}

  @Post()
  create(@Body() dto: CreateVentaDto) {
    const usuarioId = dto.vendedorId; // TODO: reemplazar por req.user.id
    return this.ventasService.create(dto, usuarioId);
  }

  @Get()
  findAll(@Query('estado') estado?: string, @Query('vendedorId') vendedorId?: string) {
    return this.ventasService.findAll(estado, vendedorId);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.ventasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateVentaDto) {
    return this.ventasService.update(id, dto);
  }

  @Patch(':id/anular')
  anular(@Param('id', ParseUUIDPipe) id: string) {
    return this.ventasService.anular(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.ventasService.remove(id);
  }
}
