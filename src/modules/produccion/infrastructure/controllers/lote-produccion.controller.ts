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
import { LoteProduccionUseCases } from '../../application/use-cases/lote-produccion.use-cases';
import { CreateLoteProduccionDto } from './dtos/create-lote-produccion.dto';
import { UpdateLoteProduccionDto } from './dtos/update-lote-produccion.dto';

@Controller('lotes-produccion')
export class LoteProduccionController {
  constructor(private readonly useCases: LoteProduccionUseCases) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateLoteProduccionDto) {
    return this.useCases.create(dto);
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
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateLoteProduccionDto) {
    return this.useCases.update(id, dto);
  }

  @Put(':id')
  updatePut(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateLoteProduccionDto) {
    return this.useCases.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.useCases.remove(id);
  }
}
