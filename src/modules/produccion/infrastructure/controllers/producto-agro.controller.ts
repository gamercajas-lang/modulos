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
import { ProductoAgroUseCases } from '../../application/use-cases/producto-agro.use-cases';
import { CreateProductoAgroDto } from './dtos/create-producto-agro.dto';
import { UpdateProductoAgroDto } from './dtos/update-producto-agro.dto';

@Controller('productos-agro')
export class ProductoAgroController {
  constructor(private readonly useCases: ProductoAgroUseCases) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateProductoAgroDto) {
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
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateProductoAgroDto) {
    return this.useCases.update(id, dto);
  }

  @Put(':id')
  updatePut(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateProductoAgroDto) {
    return this.useCases.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.useCases.remove(id);
  }
}
