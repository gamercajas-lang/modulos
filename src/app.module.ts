import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProduccionModule } from './modules/produccion/produccion.module';
import { InventarioModule } from './modules/inventario/inventario.module';
import { AuthModule } from './auth/auth.module';
import { CultivosLotesModule } from './modules/cultivos-lotes/cultivos-lotes.module';
import { ActividadesModule } from './modules/actividades/actividades.module';
import { VentasModule } from './modules/ventas/ventas.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST', 'localhost'),
        port: Number(config.get<string>('DB_PORT', '5432')),
        username: config.get<string>('DB_USERNAME', 'postgres'),
        password: config.get<string>('DB_PASSWORD', ''),
        database: config.get<string>('DB_NAME', 'proyecto_agro'),
        autoLoadEntities: true,
        synchronize: false,
      }),
    }),

    AuthModule,
    ProduccionModule,
    InventarioModule,
    CultivosLotesModule,
    ActividadesModule,
    VentasModule,
  ],
})
export class AppModule {}