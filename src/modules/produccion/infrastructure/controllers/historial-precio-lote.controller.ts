import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { HistorialPrecioLoteUseCases } from '../../application/use-cases/historial-precio-lote.use-cases';
import { CreateHistorialPrecioLoteDto } from './dtos/create-historial-precio-lote.dto';
import { UpdateHistorialPrecioLoteDto } from './dtos/update-historial-precio-lote.dto';

@Controller('historial-precios-lote')
export class HistorialPrecioLoteController {
  constructor(private readonly useCases: HistorialPrecioLoteUseCases) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateHistorialPrecioLoteDto) {
    return this.useCases.create({
      ...dto,
      fecha: new Date(dto.fecha),
    });
  }

  @Get()
  findAll() {
    return this.useCases.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.useCases.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateHistorialPrecioLoteDto) {
    return this.useCases.update(id, {
      ...dto,
      fecha: dto.fecha ? new Date(dto.fecha) : undefined,
    });
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.useCases.remove(id);
  }
}
