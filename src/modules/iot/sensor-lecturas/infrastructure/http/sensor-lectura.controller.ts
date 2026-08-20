import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CrearSensorLecturaUseCase } from '../../application/use-cases/crear-sensor-lectura.use-case';
import { ListarSensorLecturasUseCase } from '../../application/use-cases/listar-sensor-lecturas.use-case';
import { EliminarSensorLecturaUseCase } from '../../application/use-cases/eliminar-sensor-lectura.use-case';
import { CrearSensorLecturaDto } from '../../application/dto/crear-sensor-lectura.dto';

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
