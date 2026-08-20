import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CrearSensorAlertaUseCase } from '../../application/use-cases/crear-sensor-alerta.use-case';
import { ListarSensorAlertasUseCase } from '../../application/use-cases/listar-sensor-alertas.use-case';
import { ObtenerSensorAlertaUseCase } from '../../application/use-cases/obtener-sensor-alerta.use-case';
import { ActualizarSensorAlertaUseCase } from '../../application/use-cases/actualizar-sensor-alerta.use-case';
import { EliminarSensorAlertaUseCase } from '../../application/use-cases/eliminar-sensor-alerta.use-case';
import { CrearSensorAlertaDto } from '../../application/dto/crear-sensor-alerta.dto';
import { ActualizarSensorAlertaDto } from '../../application/dto/actualizar-sensor-alerta.dto';

@Controller('sensor-alertas')
export class SensorAlertaController {
  constructor(
    private readonly crearUseCase: CrearSensorAlertaUseCase,
    private readonly listarUseCase: ListarSensorAlertasUseCase,
    private readonly obtenerUseCase: ObtenerSensorAlertaUseCase,
    private readonly actualizarUseCase: ActualizarSensorAlertaUseCase,
    private readonly eliminarUseCase: EliminarSensorAlertaUseCase,
  ) {}

  @Post()
  crear(@Body() dto: CrearSensorAlertaDto) {
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
  actualizar(@Param('id', ParseIntPipe) id: number, @Body() dto: ActualizarSensorAlertaDto) {
    return this.actualizarUseCase.execute(id, dto);
  }

  @Delete(':id')
  eliminar(@Param('id', ParseIntPipe) id: number) {
    return this.eliminarUseCase.execute(id);
  }
}
