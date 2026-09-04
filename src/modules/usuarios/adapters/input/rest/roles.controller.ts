import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CrearRolUseCase } from '../../../application/use-cases/rol/crear-rol.use-case';
import { ListarRolesUseCase } from '../../../application/use-cases/rol/listar-roles.use-case';
import { ObtenerRolUseCase } from '../../../application/use-cases/rol/obtener-rol.use-case';
import { ActualizarRolUseCase } from '../../../application/use-cases/rol/actualizar-rol.use-case';
import { EliminarRolUseCase } from '../../../application/use-cases/rol/eliminar-rol.use-case';
import { CreateRolDto } from '../../../application/dto/rol/create-rol.dto';
import { UpdateRolDto } from '../../../application/dto/rol/update-rol.dto';

@Controller('roles')
export class RolesController {
  constructor(
    private readonly crearRol: CrearRolUseCase,
    private readonly listarRoles: ListarRolesUseCase,
    private readonly obtenerRol: ObtenerRolUseCase,
    private readonly actualizarRol: ActualizarRolUseCase,
    private readonly eliminarRol: EliminarRolUseCase,
  ) {}

  @Post()
  create(@Body() dto: CreateRolDto) {
    return this.crearRol.execute(dto);
  }

  @Get()
  findAll() {
    return this.listarRoles.execute();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const rol = await this.obtenerRol.execute(+id);
    if (!rol) throw new NotFoundException(`Rol con id ${id} no encontrado`);
    return rol;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateRolDto) {
    const rol = await this.actualizarRol.execute(+id, dto);
    if (!rol) throw new NotFoundException(`Rol con id ${id} no encontrado`);
    return rol;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eliminarRol.execute(+id);
  }
}
