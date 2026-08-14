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
import { AlmacenUseCases } from '../../application/use-cases/almacen.use-cases';
import { CreateAlmacenDto } from './dtos/create-almacen.dto';
import { UpdateAlmacenDto } from './dtos/update-almacen.dto';

@Controller('almacenes')
export class AlmacenController {
  constructor(private readonly useCases: AlmacenUseCases) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateAlmacenDto) {
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
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateAlmacenDto) {
    return this.useCases.update(id, dto);
  }

  @Put(':id')
  updatePut(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateAlmacenDto) {
    return this.useCases.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.useCases.remove(id);
  }
}
