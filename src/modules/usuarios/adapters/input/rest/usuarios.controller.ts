import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../../../../auth/jwt-auth.guard';
import { CrearUsuarioUseCase } from '../../../application/use-cases/usuario/crear-usuario.use-case';
import { ListarUsuariosUseCase } from '../../../application/use-cases/usuario/listar-usuarios.use-case';
import { ObtenerUsuarioUseCase } from '../../../application/use-cases/usuario/obtener-usuario.use-case';
import { ActualizarUsuarioUseCase } from '../../../application/use-cases/usuario/actualizar-usuario.use-case';
import { EliminarUsuarioUseCase } from '../../../application/use-cases/usuario/eliminar-usuario.use-case';
import { CreateUsuarioDto } from '../../../application/dto/usuario/create-usuario.dto';
import { UpdateUsuarioDto } from '../../../application/dto/usuario/update-usuario.dto';
import { Usuario } from '../../../domain/entities/usuario.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(
    private readonly crearUsuario: CrearUsuarioUseCase,
    private readonly listarUsuarios: ListarUsuariosUseCase,
    private readonly obtenerUsuario: ObtenerUsuarioUseCase,
    private readonly actualizarUsuario: ActualizarUsuarioUseCase,
    private readonly eliminarUsuario: EliminarUsuarioUseCase,
  ) {}

  // El passwordHash nunca debe salir por la API, sin importar el caso de uso.
  private sanitize(usuario: Usuario) {
    const { passwordHash, ...resto } = usuario;
    return resto;
  }

  // Registro: queda publico, igual que el login.
  @Post()
  async create(@Body() dto: CreateUsuarioDto) {
    const usuario = await this.crearUsuario.execute(dto);
    return this.sanitize(usuario);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    const usuarios = await this.listarUsuarios.execute();
    return usuarios.map((usuario) => this.sanitize(usuario));
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const usuario = await this.obtenerUsuario.execute(+id);
    if (!usuario) throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    return this.sanitize(usuario);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateUsuarioDto) {
    const usuario = await this.actualizarUsuario.execute(+id, dto);
    if (!usuario) throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    return this.sanitize(usuario);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eliminarUsuario.execute(+id);
  }
}
