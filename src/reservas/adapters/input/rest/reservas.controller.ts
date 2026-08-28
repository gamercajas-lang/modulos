import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateReservaDto } from '../../../application/dto/create-reserva.dto';
import { UpdateReservaDto } from '../../../application/dto/update-reserva.dto';

import { CreateReservaUseCase } from '../../../application/use-cases/create-reserva.use-case';
import { UpdateReservaUseCase } from '../../../application/use-cases/update-reserva.use-case';
import { DeleteReservaUseCase } from '../../../application/use-cases/delete-reserva.use-case';
import { FindAllReservaUseCase } from '../../../application/use-cases/find-all-reserva.use-case';
import { FindOneReservaUseCase } from '../../../application/use-cases/find-one-reserva.use-case';

@Controller('reservas')
export class ReservasController {
  constructor(
    private readonly createReservaUseCase: CreateReservaUseCase,
    private readonly updateReservaUseCase: UpdateReservaUseCase,
    private readonly deleteReservaUseCase: DeleteReservaUseCase,
    private readonly findAllReservaUseCase: FindAllReservaUseCase,
    private readonly findOneReservaUseCase: FindOneReservaUseCase,
  ) {}

  @Post()
  create(@Body() dto: CreateReservaDto) {
    return this.createReservaUseCase.execute(dto);
  }

  @Get()
  findAll() {
    return this.findAllReservaUseCase.execute();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.findOneReservaUseCase.execute(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateReservaDto,
  ) {
    return this.updateReservaUseCase.execute(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.deleteReservaUseCase.execute(id);
  }
}