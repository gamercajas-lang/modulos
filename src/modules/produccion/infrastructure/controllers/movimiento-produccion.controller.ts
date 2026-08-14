import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { MovimientoProduccionUseCases } from '../../application/use-cases/movimiento-produccion.use-cases';
import { CreateMovimientoProduccionDto } from './dtos/create-movimiento-produccion.dto';
import { UpdateMovimientoProduccionDto } from './dtos/update-movimiento-produccion.dto';

@Controller('movimientos-produccion')
export class MovimientoProduccionController {
  constructor(private readonly useCases: MovimientoProduccionUseCases) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateMovimientoProduccionDto) {
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

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateMovimientoProduccionDto) {
    return this.useCases.update(id, {
      ...dto,
      fecha: dto.fecha ? new Date(dto.fecha) : undefined,
    });
  }

  @Put(':id')
  updatePut(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateMovimientoProduccionDto) {
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
