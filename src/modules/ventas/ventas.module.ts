import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { Venta } from './entities/venta.entity';
import { VentaDetalle } from './entities/venta-detalle.entity';
import { Pago } from './entities/pago.entity';
import { Factura } from './entities/factura.entity';
import { VentasController } from './ventas.controller';
import { VentasService } from './ventas.service';

const VENTAS_ENTITIES = [Cliente, Venta, VentaDetalle, Pago, Factura];

@Module({
  imports: [TypeOrmModule.forFeature(VENTAS_ENTITIES)],
  controllers: [VentasController],
  providers: [VentasService],
  exports: [VentasService],
})
export class VentasModule {}
