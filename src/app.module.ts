import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { CultivosLotesModule } from './modules/cultivos-lotes/cultivos-lotes.module';
import { ProduccionModule } from './modules/produccion/produccion.module';
import { InventarioModule } from './modules/inventario/inventario.module';

// A medida que cada persona termine su módulo, lo importa aquí, ejemplo:
// import { UsuariosModule } from './modules/usuarios/usuarios.module';
// import { ProveedoresInsumosModule } from './modules/proveedores-insumos/proveedores-insumos.module';
// import { ActividadesModule } from './modules/actividades/actividades.module';
// import { VentasModule } from './modules/ventas/ventas.module';
// import { IotModule } from './modules/iot/iot.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DB_HOST'),
        port: +config.get('DB_PORT'),
        username: config.get('DB_USERNAME'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_NAME'),
        autoLoadEntities: true,
        synchronize: false, // se trabaja con migraciones desde el inicio
      }),
    }),
   // CultivosLotesModule,
    ProduccionModule,
    InventarioModule,
    // UsuariosModule,
    // ProveedoresInsumosModule,
    // ActividadesModule,
    // VentasModule,
    // IotModule,
  ],
})
export class AppModule {}
