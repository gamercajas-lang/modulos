import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../../../../auth/jwt-auth.guard';
import { CrearSensorLecturaUseCase } from '../../application/use-cases/crear-sensor-lectura.use-case';
import { ListarSensorLecturasUseCase } from '../../application/use-cases/listar-sensor-lecturas.use-case';
import { EliminarSensorLecturaUseCase } from '../../application/use-cases/eliminar-sensor-lectura.use-case';
import { CrearSensorLecturaDto } from '../../application/dto/crear-sensor-lectura.dto';

@UseGuards(JwtAuthGuard)
@Controller('sensor-lecturas')
export class SensorLecturaController {
  constructor(
    private readonly crearUseCase: CrearSensorLecturaUseCase,
    private readonly listarUseCase: ListarSensorLecturasUseCase,
    private readonly eliminarUseCase: EliminarSensorLecturaUseCase,
  ) {}

  @Post()
  crear(@Body() dto: CrearSensorLecturaDto) {
    return this.crearUseCase.execute(dto);
  }

  @Get()
  listar() {
    return this.listarUseCase.execute();
  }

  @Delete(':id')
  eliminar(@Param('id', ParseIntPipe) id: number) {
    return this.eliminarUseCase.execute(id);
  }
}
