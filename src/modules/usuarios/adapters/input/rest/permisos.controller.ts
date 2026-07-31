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
import { CrearPermisoUseCase } from '../../../application/use-cases/permiso/crear-permiso.use-case';
import { ListarPermisosUseCase } from '../../../application/use-cases/permiso/listar-permisos.use-case';
import { ObtenerPermisoUseCase } from '../../../application/use-cases/permiso/obtener-permiso.use-case';
import { ActualizarPermisoUseCase } from '../../../application/use-cases/permiso/actualizar-permiso.use-case';
import { EliminarPermisoUseCase } from '../../../application/use-cases/permiso/eliminar-permiso.use-case';
import { CreatePermisoDto } from '../../../application/dto/permiso/create-permiso.dto';
import { UpdatePermisoDto } from '../../../application/dto/permiso/update-permiso.dto';

@Controller('permisos')
export class PermisosController {
  constructor(
    private readonly crearPermiso: CrearPermisoUseCase,
    private readonly listarPermisos: ListarPermisosUseCase,
    private readonly obtenerPermiso: ObtenerPermisoUseCase,
    private readonly actualizarPermiso: ActualizarPermisoUseCase,
    private readonly eliminarPermiso: EliminarPermisoUseCase,
  ) {}

  @Post()
  create(@Body() dto: CreatePermisoDto) {
    return this.crearPermiso.execute(dto);
  }

  @Get()
  findAll() {
    return this.listarPermisos.execute();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const permiso = await this.obtenerPermiso.execute(+id);
    if (!permiso) throw new NotFoundException(`Permiso con id ${id} no encontrado`);
    return permiso;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdatePermisoDto) {
    const permiso = await this.actualizarPermiso.execute(+id, dto);
    if (!permiso) throw new NotFoundException(`Permiso con id ${id} no encontrado`);
    return permiso;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eliminarPermiso.execute(+id);
  }
}
