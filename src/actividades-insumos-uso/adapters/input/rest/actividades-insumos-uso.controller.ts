import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { CreateActividadInsumoUsoDto } from '../../../application/dto/create-actividad-insumo-uso.dto';
import { UpdateActividadInsumoUsoDto } from '../../../application/dto/update-actividad-insumo-uso.dto';

import { CreateActividadInsumoUsoUseCase } from '../../../application/use-cases/create-actividad-insumo-uso.use-case';
import { UpdateActividadInsumoUsoUseCase } from '../../../application/use-cases/update-actividad-insumo-uso.use-case';
import { DeleteActividadInsumoUsoUseCase } from '../../../application/use-cases/delete-actividad-insumo-uso.use-case';
import { FindAllActividadInsumoUsoUseCase } from '../../../application/use-cases/find-all-actividad-insumo-uso.use-case';
import { FindOneActividadInsumoUsoUseCase } from '../../../application/use-cases/find-one-actividad-insumo-uso.use-case';

@Controller('actividades-insumos-uso')
export class ActividadesInsumosUsoController {
  constructor(
    private readonly createActividadInsumoUsoUseCase: CreateActividadInsumoUsoUseCase,
    private readonly updateActividadInsumoUsoUseCase: UpdateActividadInsumoUsoUseCase,
    private readonly deleteActividadInsumoUsoUseCase: DeleteActividadInsumoUsoUseCase,
    private readonly findAllActividadInsumoUsoUseCase: FindAllActividadInsumoUsoUseCase,
    private readonly findOneActividadInsumoUsoUseCase: FindOneActividadInsumoUsoUseCase,
  ) {}

  @Post()
  create(
    @Body() createActividadInsumoUsoDto: CreateActividadInsumoUsoDto,
  ) {
    return this.createActividadInsumoUsoUseCase.execute(
      createActividadInsumoUsoDto,
    );
  }

  @Get()
  findAll() {
    return this.findAllActividadInsumoUsoUseCase.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findOneActividadInsumoUsoUseCase.execute(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateActividadInsumoUsoDto: UpdateActividadInsumoUsoDto,
  ) {
    return this.updateActividadInsumoUsoUseCase.execute(
      +id,
      updateActividadInsumoUsoDto,
    );
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.deleteActividadInsumoUsoUseCase.execute(+id);
  }
}
