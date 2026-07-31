import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Entidades de persistencia (TypeORM)
import { RolOrmEntity } from './adapters/output/persistence/entities/rol-orm.entity';
import { PermisoOrmEntity } from './adapters/output/persistence/entities/permiso-orm.entity';
import { UsuarioOrmEntity } from './adapters/output/persistence/entities/usuario-orm.entity';
import { ProgramaFormacionOrmEntity } from './adapters/output/persistence/entities/programa-formacion-orm.entity';
import { TipoFormacionOrmEntity } from './adapters/output/persistence/entities/tipo-formacion-orm.entity';
import { NotificacionOrmEntity } from './adapters/output/persistence/entities/notificacion-orm.entity';
import { EmailCodeOrmEntity } from './adapters/output/persistence/entities/email-code-orm.entity';
import { TelegramFormEstadoOrmEntity } from './adapters/output/persistence/entities/telegram-form-estado-orm.entity';

// Controladores REST (solo para las entidades con CRUD expuesto)
import { RolesController } from './adapters/input/rest/roles.controller';
import { PermisosController } from './adapters/input/rest/permisos.controller';
import { UsuariosController } from './adapters/input/rest/usuarios.controller';
import { ProgramasFormacionController } from './adapters/input/rest/programas-formacion.controller';
import { TiposFormacionController } from './adapters/input/rest/tipos-formacion.controller';
import { NotificacionesController } from './adapters/input/rest/notificaciones.controller';

// Repositorios TypeORM (implementaciones de los puertos)
import { RolTypeOrmRepository } from './adapters/output/persistence/rol-typeorm.repository';
import { PermisoTypeOrmRepository } from './adapters/output/persistence/permiso-typeorm.repository';
import { UsuarioTypeOrmRepository } from './adapters/output/persistence/usuario-typeorm.repository';
import { ProgramaFormacionTypeOrmRepository } from './adapters/output/persistence/programa-formacion-typeorm.repository';
import { TipoFormacionTypeOrmRepository } from './adapters/output/persistence/tipo-formacion-typeorm.repository';
import { NotificacionTypeOrmRepository } from './adapters/output/persistence/notificacion-typeorm.repository';
import { EmailCodeTypeOrmRepository } from './adapters/output/persistence/email-code-typeorm.repository';
import { TelegramFormEstadoTypeOrmRepository } from './adapters/output/persistence/telegram-form-estado-typeorm.repository';

// Tokens de los puertos de salida
import { ROL_REPOSITORY } from './ports/output/rol-repository.port';
import { PERMISO_REPOSITORY } from './ports/output/permiso-repository.port';
import { USUARIO_REPOSITORY } from './ports/output/usuario-repository.port';
import { PROGRAMA_FORMACION_REPOSITORY } from './ports/output/programa-formacion-repository.port';
import { TIPO_FORMACION_REPOSITORY } from './ports/output/tipo-formacion-repository.port';
import { NOTIFICACION_REPOSITORY } from './ports/output/notificacion-repository.port';
import { EMAIL_CODE_REPOSITORY } from './ports/output/email-code-repository.port';
import { TELEGRAM_FORM_ESTADO_REPOSITORY } from './ports/output/telegram-form-estado-repository.port';

// Casos de uso: rol
import { CrearRolUseCase } from './application/use-cases/rol/crear-rol.use-case';
import { ListarRolesUseCase } from './application/use-cases/rol/listar-roles.use-case';
import { ObtenerRolUseCase } from './application/use-cases/rol/obtener-rol.use-case';
import { ActualizarRolUseCase } from './application/use-cases/rol/actualizar-rol.use-case';
import { EliminarRolUseCase } from './application/use-cases/rol/eliminar-rol.use-case';

// Casos de uso: permiso
import { CrearPermisoUseCase } from './application/use-cases/permiso/crear-permiso.use-case';
import { ListarPermisosUseCase } from './application/use-cases/permiso/listar-permisos.use-case';
import { ObtenerPermisoUseCase } from './application/use-cases/permiso/obtener-permiso.use-case';
import { ActualizarPermisoUseCase } from './application/use-cases/permiso/actualizar-permiso.use-case';
import { EliminarPermisoUseCase } from './application/use-cases/permiso/eliminar-permiso.use-case';

// Casos de uso: usuario
import { CrearUsuarioUseCase } from './application/use-cases/usuario/crear-usuario.use-case';
import { ListarUsuariosUseCase } from './application/use-cases/usuario/listar-usuarios.use-case';
import { ObtenerUsuarioUseCase } from './application/use-cases/usuario/obtener-usuario.use-case';
import { ActualizarUsuarioUseCase } from './application/use-cases/usuario/actualizar-usuario.use-case';
import { EliminarUsuarioUseCase } from './application/use-cases/usuario/eliminar-usuario.use-case';

// Casos de uso: programa-formacion
import { CrearProgramaFormacionUseCase } from './application/use-cases/programa-formacion/crear-programa-formacion.use-case';
import { ListarProgramasFormacionUseCase } from './application/use-cases/programa-formacion/listar-programas-formacion.use-case';
import { ObtenerProgramaFormacionUseCase } from './application/use-cases/programa-formacion/obtener-programa-formacion.use-case';
import { ActualizarProgramaFormacionUseCase } from './application/use-cases/programa-formacion/actualizar-programa-formacion.use-case';
import { EliminarProgramaFormacionUseCase } from './application/use-cases/programa-formacion/eliminar-programa-formacion.use-case';

// Casos de uso: tipo-formacion
import { CrearTipoFormacionUseCase } from './application/use-cases/tipo-formacion/crear-tipo-formacion.use-case';
import { ListarTiposFormacionUseCase } from './application/use-cases/tipo-formacion/listar-tipos-formacion.use-case';
import { ObtenerTipoFormacionUseCase } from './application/use-cases/tipo-formacion/obtener-tipo-formacion.use-case';
import { ActualizarTipoFormacionUseCase } from './application/use-cases/tipo-formacion/actualizar-tipo-formacion.use-case';
import { EliminarTipoFormacionUseCase } from './application/use-cases/tipo-formacion/eliminar-tipo-formacion.use-case';

// Casos de uso: notificacion
import { CrearNotificacionUseCase } from './application/use-cases/notificacion/crear-notificacion.use-case';
import { ListarNotificacionesUseCase } from './application/use-cases/notificacion/listar-notificaciones.use-case';
import { ObtenerNotificacionUseCase } from './application/use-cases/notificacion/obtener-notificacion.use-case';
import { ActualizarNotificacionUseCase } from './application/use-cases/notificacion/actualizar-notificacion.use-case';
import { EliminarNotificacionUseCase } from './application/use-cases/notificacion/eliminar-notificacion.use-case';

// email_codes y telegram_form_estado son tablas de soporte (sin controller ni
// use-cases propios en este modulo): quedan registradas como entidad TypeORM
// y con su repositorio + puerto ya implementados, listos para ser consumidos
// por un futuro modulo de auth / integracion con el bot de Telegram.

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RolOrmEntity,
      PermisoOrmEntity,
      UsuarioOrmEntity,
      ProgramaFormacionOrmEntity,
      TipoFormacionOrmEntity,
      NotificacionOrmEntity,
      EmailCodeOrmEntity,
      TelegramFormEstadoOrmEntity,
    ]),
  ],
  controllers: [
    RolesController,
    PermisosController,
    UsuariosController,
    ProgramasFormacionController,
    TiposFormacionController,
    NotificacionesController,
  ],
  providers: [
    // Bindings puerto -> adaptador
    { provide: ROL_REPOSITORY, useClass: RolTypeOrmRepository },
    { provide: PERMISO_REPOSITORY, useClass: PermisoTypeOrmRepository },
    { provide: USUARIO_REPOSITORY, useClass: UsuarioTypeOrmRepository },
    { provide: PROGRAMA_FORMACION_REPOSITORY, useClass: ProgramaFormacionTypeOrmRepository },
    { provide: TIPO_FORMACION_REPOSITORY, useClass: TipoFormacionTypeOrmRepository },
    { provide: NOTIFICACION_REPOSITORY, useClass: NotificacionTypeOrmRepository },
    { provide: EMAIL_CODE_REPOSITORY, useClass: EmailCodeTypeOrmRepository },
    { provide: TELEGRAM_FORM_ESTADO_REPOSITORY, useClass: TelegramFormEstadoTypeOrmRepository },

    // Casos de uso: rol
    CrearRolUseCase,
    ListarRolesUseCase,
    ObtenerRolUseCase,
    ActualizarRolUseCase,
    EliminarRolUseCase,

    // Casos de uso: permiso
    CrearPermisoUseCase,
    ListarPermisosUseCase,
    ObtenerPermisoUseCase,
    ActualizarPermisoUseCase,
    EliminarPermisoUseCase,

    // Casos de uso: usuario
    CrearUsuarioUseCase,
    ListarUsuariosUseCase,
    ObtenerUsuarioUseCase,
    ActualizarUsuarioUseCase,
    EliminarUsuarioUseCase,

    // Casos de uso: programa-formacion
    CrearProgramaFormacionUseCase,
    ListarProgramasFormacionUseCase,
    ObtenerProgramaFormacionUseCase,
    ActualizarProgramaFormacionUseCase,
    EliminarProgramaFormacionUseCase,

    // Casos de uso: tipo-formacion
    CrearTipoFormacionUseCase,
    ListarTiposFormacionUseCase,
    ObtenerTipoFormacionUseCase,
    ActualizarTipoFormacionUseCase,
    EliminarTipoFormacionUseCase,

    // Casos de uso: notificacion
    CrearNotificacionUseCase,
    ListarNotificacionesUseCase,
    ObtenerNotificacionUseCase,
    ActualizarNotificacionUseCase,
    EliminarNotificacionUseCase,
  ],
  exports: [TypeOrmModule],
})
export class UsuariosModule {}
