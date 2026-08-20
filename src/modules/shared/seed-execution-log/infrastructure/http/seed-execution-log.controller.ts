import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegistrarSeedExecutionLogUseCase } from '../../application/use-cases/registrar-seed-execution-log.use-case';
import { ListarSeedExecutionLogsUseCase } from '../../application/use-cases/listar-seed-execution-logs.use-case';
import { CrearSeedExecutionLogDto } from '../../application/dto/crear-seed-execution-log.dto';

@Controller('seed-execution-log')
export class SeedExecutionLogController {
  constructor(
    private readonly registrarUseCase: RegistrarSeedExecutionLogUseCase,
    private readonly listarUseCase: ListarSeedExecutionLogsUseCase,
  ) {}

  @Post()
  registrar(@Body() dto: CrearSeedExecutionLogDto) {
    return this.registrarUseCase.execute(dto);
  }

  @Get()
  listar() {
    return this.listarUseCase.execute();
  }
}
