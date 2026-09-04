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
import { CrearNotificacionUseCase } from '../../../application/use-cases/notificacion/crear-notificacion.use-case';
import { ListarNotificacionesUseCase } from '../../../application/use-cases/notificacion/listar-notificaciones.use-case';
import { ObtenerNotificacionUseCase } from '../../../application/use-cases/notificacion/obtener-notificacion.use-case';
import { ActualizarNotificacionUseCase } from '../../../application/use-cases/notificacion/actualizar-notificacion.use-case';
import { EliminarNotificacionUseCase } from '../../../application/use-cases/notificacion/eliminar-notificacion.use-case';
import { CreateNotificacionDto } from '../../../application/dto/notificacion/create-notificacion.dto';
import { UpdateNotificacionDto } from '../../../application/dto/notificacion/update-notificacion.dto';

@Controller('notificaciones')
export class NotificacionesController {
  constructor(
    private readonly crearNotificacion: CrearNotificacionUseCase,
    private readonly listarNotificaciones: ListarNotificacionesUseCase,
    private readonly obtenerNotificacion: ObtenerNotificacionUseCase,
    private readonly actualizarNotificacion: ActualizarNotificacionUseCase,
    private readonly eliminarNotificacion: EliminarNotificacionUseCase,
  ) {}

  @Post()
  create(@Body() dto: CreateNotificacionDto) {
    return this.crearNotificacion.execute(dto);
  }

  @Get()
  findAll() {
    return this.listarNotificaciones.execute();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const notificacion = await this.obtenerNotificacion.execute(+id);
    if (!notificacion) throw new NotFoundException(`Notificacion con id ${id} no encontrada`);
    return notificacion;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateNotificacionDto) {
    const notificacion = await this.actualizarNotificacion.execute(+id, dto);
    if (!notificacion) throw new NotFoundException(`Notificacion con id ${id} no encontrada`);
    return notificacion;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eliminarNotificacion.execute(+id);
  }
}
