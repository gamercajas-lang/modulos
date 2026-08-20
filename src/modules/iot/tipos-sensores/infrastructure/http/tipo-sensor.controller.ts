import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CrearTipoSensorUseCase } from '../../application/use-cases/crear-tipo-sensor.use-case';
import { ListarTiposSensoresUseCase } from '../../application/use-cases/listar-tipos-sensores.use-case';
import { ObtenerTipoSensorUseCase } from '../../application/use-cases/obtener-tipo-sensor.use-case';
import { ActualizarTipoSensorUseCase } from '../../application/use-cases/actualizar-tipo-sensor.use-case';
import { EliminarTipoSensorUseCase } from '../../application/use-cases/eliminar-tipo-sensor.use-case';
import { CrearTipoSensorDto } from '../../application/dto/crear-tipo-sensor.dto';
import { ActualizarTipoSensorDto } from '../../application/dto/actualizar-tipo-sensor.dto';

@Controller('tipos-sensores')
export class TipoSensorController {
  constructor(
    private readonly crearUseCase: CrearTipoSensorUseCase,
    private readonly listarUseCase: ListarTiposSensoresUseCase,
    private readonly obtenerUseCase: ObtenerTipoSensorUseCase,
    private readonly actualizarUseCase: ActualizarTipoSensorUseCase,
    private readonly eliminarUseCase: EliminarTipoSensorUseCase,
  ) {}

  @Post()
  crear(@Body() dto: CrearTipoSensorDto) {
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
  actualizar(@Param('id', ParseIntPipe) id: number, @Body() dto: ActualizarTipoSensorDto) {
    return this.actualizarUseCase.execute(id, dto);
  }

  @Delete(':id')
  eliminar(@Param('id', ParseIntPipe) id: number) {
    return this.eliminarUseCase.execute(id);
  }
}