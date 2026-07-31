import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';

import { CreateInsumoDto } from '../../../application/dto/create-insumo.dto';
import { UpdateInsumoDto } from '../../../application/dto/update-insumo.dto';

import { CreateInsumoUseCase } from '../../../application/use-cases/create-insumo.use-case';
import { UpdateInsumoUseCase } from '../../../application/use-cases/update-insumo.use-case';
import { DeleteInsumoUseCase } from '../../../application/use-cases/delete-insumo.use-case';
import { FindAllInsumoUseCase } from '../../../application/use-cases/find-all-insumo.use-case';
import { FindOneInsumoUseCase } from '../../../application/use-cases/find-one-insumo.use-case';

@Controller('insumos')
export class InsumosController {
  constructor(
    private readonly createInsumoUseCase: CreateInsumoUseCase,
    private readonly updateInsumoUseCase: UpdateInsumoUseCase,
    private readonly deleteInsumoUseCase: DeleteInsumoUseCase,
    private readonly findAllInsumoUseCase: FindAllInsumoUseCase,
    private readonly findOneInsumoUseCase: FindOneInsumoUseCase,
  ) {}

  @Post()
  create(@Body() createInsumoDto: CreateInsumoDto) {
    return this.createInsumoUseCase.execute(createInsumoDto);
  }

  @Get()
  findAll() {
    return this.findAllInsumoUseCase.execute();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.findOneInsumoUseCase.execute(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateInsumoDto: UpdateInsumoDto,
  ) {
    return this.updateInsumoUseCase.execute(id, updateInsumoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.deleteInsumoUseCase.execute(id);
  }
}
