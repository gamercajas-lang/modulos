import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

export const getTypeOrmConfig = (config: ConfigService): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: config.get('DB_HOST'),
  port: config.get('DB_PORT'),
  username: config.get('DB_USER'),
  password: config.get('DB_PASSWORD'),
  database: config.get('DB_NAME'),
  entities: [__dirname + '/../modules/**/*.orm-entity{.ts,.js}'],
  synchronize: false,
  migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
});
