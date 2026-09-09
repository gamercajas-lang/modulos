import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';

import { CreateActividadInsumoDto } from '../../../application/dto/create-actividad-insumo.dto';
import { UpdateActividadInsumoDto } from '../../../application/dto/update-actividad-insumo.dto';

import { CreateActividadInsumoUseCase } from '../../../application/use-cases/create-actividad-insumo.use-case';
import { UpdateActividadInsumoUseCase } from '../../../application/use-cases/update-actividad-insumo.use-case';
import { DeleteActividadInsumoUseCase } from '../../../application/use-cases/delete-actividad-insumo.use-case';
import { FindAllActividadInsumoUseCase } from '../../../application/use-cases/find-all-actividad-insumo.use-case';
import { FindOneActividadInsumoUseCase } from '../../../application/use-cases/find-one-actividad-insumo.use-case';

import { JwtAuthGuard } from '../../../../../auth/jwt-auth.guard';

@Controller('actividad-insumos')
@UseGuards(JwtAuthGuard)
export class ActividadInsumosController {
  constructor(
    private readonly createActividadInsumoUseCase: CreateActividadInsumoUseCase,
    private readonly updateActividadInsumoUseCase: UpdateActividadInsumoUseCase,
    private readonly deleteActividadInsumoUseCase: DeleteActividadInsumoUseCase,
    private readonly findAllActividadInsumoUseCase: FindAllActividadInsumoUseCase,
    private readonly findOneActividadInsumoUseCase: FindOneActividadInsumoUseCase,
  ) {}

  @Post()
  create(@Body() dto: CreateActividadInsumoDto) {
    return this.createActividadInsumoUseCase.execute(dto);
  }

  @Get()
  findAll() {
    return this.findAllActividadInsumoUseCase.execute();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.findOneActividadInsumoUseCase.execute(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateActividadInsumoDto,
  ) {
    return this.updateActividadInsumoUseCase.execute(id, dto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteActividadInsumoUseCase.execute(id);
  }
}