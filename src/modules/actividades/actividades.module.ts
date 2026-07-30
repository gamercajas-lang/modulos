import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actividad } from './entities/actividad.entity';
import { ActividadInsumo } from './entities/actividad-insumo.entity';
import { ActividadesService } from './actividades.service';
import { ActividadesController } from './actividades.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Actividad, ActividadInsumo])],
  controllers: [ActividadesController],
  providers: [ActividadesService],
  exports: [ActividadesService],
})
export class ActividadesModule {}
