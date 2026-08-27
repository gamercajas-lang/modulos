import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actividad } from './entities/actividad.entity';
import { ActividadHistorial } from './entities/actividad-historial.entity';
import { ActividadEvidencia } from './entities/actividad-evidencia.entity';
import { ActividadHerramienta } from './entities/actividad-herramienta.entity';
import { ActividadResponsable } from './entities/actividad-responsable.entity';
import { ActividadServicio } from './entities/actividad-servicio.entity';
import { UsoHerramienta } from './entities/uso-herramienta.entity';
import { TransaccionFinanciera } from './entities/transaccion-financiera.entity';
import { ActividadesController } from './actividades.controller';
import { ActividadesService } from './actividades.service';

const ACTIVIDAD_ENTITIES = [
  Actividad,
  ActividadHistorial,
  ActividadEvidencia,
  ActividadHerramienta,
  ActividadResponsable,
  ActividadServicio,
  UsoHerramienta,
  TransaccionFinanciera,
];

@Module({
  imports: [TypeOrmModule.forFeature(ACTIVIDAD_ENTITIES)],
  controllers: [ActividadesController],
  providers: [ActividadesService],
  exports: [ActividadesService],
})
export class ActividadesModule {}
