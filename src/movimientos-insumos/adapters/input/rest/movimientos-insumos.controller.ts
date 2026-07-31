import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { CreateMovimientoInsumoDto } from '../../../application/dto/create-movimiento-insumo.dto';
import { UpdateMovimientoInsumoDto } from '../../../application/dto/update-movimiento-insumo.dto';

import { CreateMovimientoInsumoUseCase } from '../../../application/use-cases/create-movimiento-insumo.use-case';
import { UpdateMovimientoInsumoUseCase } from '../../../application/use-cases/update-movimiento-insumo.use-case';
import { DeleteMovimientoInsumoUseCase } from '../../../application/use-cases/delete-movimiento-insumo.use-case';
import { FindAllMovimientoInsumoUseCase } from '../../../application/use-cases/find-all-movimiento-insumo.use-case';
import { FindOneMovimientoInsumoUseCase } from '../../../application/use-cases/find-one-movimiento-insumo.use-case';

@Controller('movimientos-insumos')
export class MovimientosInsumosController {
  constructor(
    private readonly createMovimientoInsumoUseCase: CreateMovimientoInsumoUseCase,
    private readonly updateMovimientoInsumoUseCase: UpdateMovimientoInsumoUseCase,
    private readonly deleteMovimientoInsumoUseCase: DeleteMovimientoInsumoUseCase,
    private readonly findAllMovimientoInsumoUseCase: FindAllMovimientoInsumoUseCase,
    private readonly findOneMovimientoInsumoUseCase: FindOneMovimientoInsumoUseCase,
  ) {}

  @Post()
  create(@Body() dto: CreateMovimientoInsumoDto) {
    return this.createMovimientoInsumoUseCase.execute(dto);
  }

  @Get()
  findAll() {
    return this.findAllMovimientoInsumoUseCase.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findOneMovimientoInsumoUseCase.execute(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateMovimientoInsumoDto,
  ) {
    return this.updateMovimientoInsumoUseCase.execute(+id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.deleteMovimientoInsumoUseCase.execute(+id);
  }
}