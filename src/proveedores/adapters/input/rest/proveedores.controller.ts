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

import { CreateProveedorDto } from '../../../application/dto/create-proveedor.dto';
import { UpdateProveedorDto } from '../../../application/dto/update-proveedor.dto';

import { CreateProveedorUseCase } from '../../../application/use-cases/create-proveedor.use-case';
import { UpdateProveedorUseCase } from '../../../application/use-cases/update-proveedor.use-case';
import { DeleteProveedorUseCase } from '../../../application/use-cases/delete-proveedor.use-case';
import { FindAllProveedorUseCase } from '../../../application/use-cases/find-all-proveedor.use-case';
import { FindOneProveedorUseCase } from '../../../application/use-cases/find-one-proveedor.use-case';

@Controller('proveedores')
export class ProveedoresController {
  constructor(
    private readonly createProveedorUseCase: CreateProveedorUseCase,
    private readonly updateProveedorUseCase: UpdateProveedorUseCase,
    private readonly deleteProveedorUseCase: DeleteProveedorUseCase,
    private readonly findAllProveedorUseCase: FindAllProveedorUseCase,
    private readonly findOneProveedorUseCase: FindOneProveedorUseCase,
  ) {}

  @Post()
  create(@Body() createProveedorDto: CreateProveedorDto) {
    return this.createProveedorUseCase.execute(createProveedorDto);
  }

  @Get()
  findAll() {
    return this.findAllProveedorUseCase.execute();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.findOneProveedorUseCase.execute(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProveedorDto: UpdateProveedorDto,
  ) {
    return this.updateProveedorUseCase.execute(id, updateProveedorDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.deleteProveedorUseCase.execute(id);
  }
}