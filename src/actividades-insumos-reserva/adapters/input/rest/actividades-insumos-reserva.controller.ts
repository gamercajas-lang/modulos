import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { CreateActividadInsumoReservaDto } from '../../../application/dto/create-actividad-insumo-reserva.dto';
import { UpdateActividadInsumoReservaDto } from '../../../application/dto/update-actividad-insumo-reserva.dto';

import { CreateActividadInsumoReservaUseCase } from '../../../application/use-cases/create-actividad-insumo-reserva.use-case';
import { UpdateActividadInsumoReservaUseCase } from '../../../application/use-cases/update-actividad-insumo-reserva.use-case';
import { DeleteActividadInsumoReservaUseCase } from '../../../application/use-cases/delete-actividad-insumo-reserva.use-case';
import { FindAllActividadInsumoReservaUseCase } from '../../../application/use-cases/find-all-actividad-insumo-reserva.use-case';
import { FindOneActividadInsumoReservaUseCase } from '../../../application/use-cases/find-one-actividad-insumo-reserva.use-case';

@Controller('actividades-insumos-reserva')
export class ActividadesInsumosReservaController {
  constructor(
    private readonly createActividadInsumoReservaUseCase: CreateActividadInsumoReservaUseCase,
    private readonly updateActividadInsumoReservaUseCase: UpdateActividadInsumoReservaUseCase,
    private readonly deleteActividadInsumoReservaUseCase: DeleteActividadInsumoReservaUseCase,
    private readonly findAllActividadInsumoReservaUseCase: FindAllActividadInsumoReservaUseCase,
    private readonly findOneActividadInsumoReservaUseCase: FindOneActividadInsumoReservaUseCase,
  ) {}

  @Post()
  create(
    @Body() createActividadInsumoReservaDto: CreateActividadInsumoReservaDto,
  ) {
    return this.createActividadInsumoReservaUseCase.execute(
      createActividadInsumoReservaDto,
    );
  }

  @Get()
  findAll() {
    return this.findAllActividadInsumoReservaUseCase.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findOneActividadInsumoReservaUseCase.execute(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateActividadInsumoReservaDto: UpdateActividadInsumoReservaDto,
  ) {
    return this.updateActividadInsumoReservaUseCase.execute(
      +id,
      updateActividadInsumoReservaDto,
    );
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.deleteActividadInsumoReservaUseCase.execute(+id);
  }
}