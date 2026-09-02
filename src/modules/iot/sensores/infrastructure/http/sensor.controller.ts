import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../../../../auth/jwt-auth.guard';
import { CrearSensorUseCase } from '../../application/use-cases/crear-sensor.use-case';
import { ListarSensoresUseCase } from '../../application/use-cases/listar-sensores.use-case';
import { ObtenerSensorUseCase } from '../../application/use-cases/obtener-sensor.use-case';
import { ActualizarSensorUseCase } from '../../application/use-cases/actualizar-sensor.use-case';
import { EliminarSensorUseCase } from '../../application/use-cases/eliminar-sensor.use-case';
import { CrearSensorDto } from '../../application/dto/crear-sensor.dto';
import { ActualizarSensorDto } from '../../application/dto/actualizar-sensor.dto';

@UseGuards(JwtAuthGuard)
@Controller('sensores')
export class SensorController {
  constructor(
    private readonly crearUseCase: CrearSensorUseCase,
    private readonly listarUseCase: ListarSensoresUseCase,
    private readonly obtenerUseCase: ObtenerSensorUseCase,
    private readonly actualizarUseCase: ActualizarSensorUseCase,
    private readonly eliminarUseCase: EliminarSensorUseCase,
  ) {}

  @Post()
  crear(@Body() dto: CrearSensorDto) {
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
  actualizar(@Param('id', ParseIntPipe) id: number, @Body() dto: ActualizarSensorDto) {
    return this.actualizarUseCase.execute(id, dto);
  }

  @Delete(':id')
  eliminar(@Param('id', ParseIntPipe) id: number) {
    return this.eliminarUseCase.execute(id);
  }
}
