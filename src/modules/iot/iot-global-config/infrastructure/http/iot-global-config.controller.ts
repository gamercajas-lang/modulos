import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../../../../auth/jwt-auth.guard';
import { CrearIotGlobalConfigUseCase } from '../../application/use-cases/crear-iot-global-config.use-case';
import { ListarIotGlobalConfigUseCase } from '../../application/use-cases/listar-iot-global-config.use-case';
import { ObtenerIotGlobalConfigUseCase } from '../../application/use-cases/obtener-iot-global-config.use-case';
import { ActualizarIotGlobalConfigUseCase } from '../../application/use-cases/actualizar-iot-global-config.use-case';
import { EliminarIotGlobalConfigUseCase } from '../../application/use-cases/eliminar-iot-global-config.use-case';
import { CrearIotGlobalConfigDto } from '../../application/dto/crear-iot-global-config.dto';
import { ActualizarIotGlobalConfigDto } from '../../application/dto/actualizar-iot-global-config.dto';

@UseGuards(JwtAuthGuard)
@Controller('iot-global-config')
export class IotGlobalConfigController {
  constructor(
    private readonly crearUseCase: CrearIotGlobalConfigUseCase,
    private readonly listarUseCase: ListarIotGlobalConfigUseCase,
    private readonly obtenerUseCase: ObtenerIotGlobalConfigUseCase,
    private readonly actualizarUseCase: ActualizarIotGlobalConfigUseCase,
    private readonly eliminarUseCase: EliminarIotGlobalConfigUseCase,
  ) {}

  @Post()
  crear(@Body() dto: CrearIotGlobalConfigDto) {
    return this.crearUseCase.execute(dto);
  }

  @Get()
  listar() {
    return this.listarUseCase.execute();
  }

  @Get(':id')
  obtener(@Param('id', ParseIntPipe) id: number) {
    return this.obtenerUseCase.execute(id);
  }

  @Patch(':id')
  actualizar(@Param('id', ParseIntPipe) id: number, @Body() dto: ActualizarIotGlobalConfigDto) {
    return this.actualizarUseCase.execute(id, dto);
  }

  @Delete(':id')
  eliminar(@Param('id', ParseIntPipe) id: number) {
    return this.eliminarUseCase.execute(id);
  }
}