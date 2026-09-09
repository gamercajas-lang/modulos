import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IncidenciaService } from './incidencia.service';
import { CreateIncidenciaDto } from './dto/create-incidencia.dto';
import { UpdateIncidenciaDto } from './dto/update-incidencia.dto';

@Controller('incidencia')
export class IncidenciaController {

  constructor(private readonly incidenciaService: IncidenciaService) {}

  @Post()
  create(@Body() data: CreateIncidenciaDto) {
    return this.incidenciaService.create(data);
  }

  @Get()
  findAll() {
    return this.incidenciaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.incidenciaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateIncidenciaDto) {
    return this.incidenciaService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.incidenciaService.remove(+id);
  }
}