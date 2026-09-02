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
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../../../auth/jwt-auth.guard';
import { InsumoUseCases } from '../../application/use-cases/insumo.use-cases';
import { CreateInsumoDto } from './dtos/create-insumo.dto';
import { UpdateInsumoDto } from './dtos/update-insumo.dto';

@UseGuards(JwtAuthGuard)
@Controller('insumos')
export class InsumoController {
  constructor(private readonly useCases: InsumoUseCases) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateInsumoDto) {
    return this.useCases.create({
      ...dto,
      fechaRegistro: dto.fechaRegistro ? new Date(dto.fechaRegistro) : undefined,
      fechaAdquisicion: dto.fechaAdquisicion ? new Date(dto.fechaAdquisicion) : undefined,
      fechaUltimoMantenimiento: dto.fechaUltimoMantenimiento
        ? new Date(dto.fechaUltimoMantenimiento)
        : undefined,
      fechaBaja: dto.fechaBaja ? new Date(dto.fechaBaja) : undefined,
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
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateInsumoDto) {
    return this.useCases.update(id, {
      ...dto,
      fechaRegistro: dto.fechaRegistro ? new Date(dto.fechaRegistro) : undefined,
      fechaAdquisicion: dto.fechaAdquisicion ? new Date(dto.fechaAdquisicion) : undefined,
      fechaUltimoMantenimiento: dto.fechaUltimoMantenimiento
        ? new Date(dto.fechaUltimoMantenimiento)
        : undefined,
      fechaBaja: dto.fechaBaja ? new Date(dto.fechaBaja) : undefined,
    });
  }

  @Put(':id')
  updatePut(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateInsumoDto) {
    return this.useCases.update(id, {
      ...dto,
      fechaRegistro: dto.fechaRegistro ? new Date(dto.fechaRegistro) : undefined,
      fechaAdquisicion: dto.fechaAdquisicion ? new Date(dto.fechaAdquisicion) : undefined,
      fechaUltimoMantenimiento: dto.fechaUltimoMantenimiento
        ? new Date(dto.fechaUltimoMantenimiento)
        : undefined,
      fechaBaja: dto.fechaBaja ? new Date(dto.fechaBaja) : undefined,
    });
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.useCases.remove(id);
  }
}
