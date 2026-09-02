import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller()
export class VentasController {
  constructor(private readonly service: VentasService) {}

  @Get('clientes') clientesAll(){ return this.service.clientesAll(); }
  @Get('clientes/:id') clientesOne(@Param('id') id:string){ return this.service.clientesOne(+id); }
  @Post('clientes') clientesCreate(@Body() b:any){ return this.service.clientesCreate(b); }
  @Patch('clientes/:id') clientesUpdate(@Param('id') id:string,@Body() b:any){ return this.service.clientesUpdate(+id,b); }
  @Delete('clientes/:id') clientesRemove(@Param('id') id:string){ return this.service.clientesRemove(+id); }

  @Get('ventas') ventasAll(){ return this.service.ventasAll(); }
  @Get('ventas/:id') ventasOne(@Param('id') id:string){ return this.service.ventasOne(+id); }
  @Post('ventas') ventasCreate(@Body() b:any){ return this.service.ventasCreate(b); }
  @Patch('ventas/:id') ventasUpdate(@Param('id') id:string,@Body() b:any){ return this.service.ventasUpdate(+id,b); }
  @Delete('ventas/:id') ventasRemove(@Param('id') id:string){ return this.service.ventasRemove(+id); }

  @Get('ventas-detalles') detallesAll(){ return this.service.childAll('detalles'); }
  @Get('ventas-detalles/:id') detallesOne(@Param('id') id:string){ return this.service.childOne('detalles',+id); }
  @Post('ventas-detalles') detallesCreate(@Body() b:any){ return this.service.childCreate('detalles',b); }
  @Patch('ventas-detalles/:id') detallesUpdate(@Param('id') id:string,@Body() b:any){ return this.service.childUpdate('detalles',+id,b); }
  @Delete('ventas-detalles/:id') detallesRemove(@Param('id') id:string){ return this.service.childRemove('detalles',+id); }

  @Get('pagos') pagosAll(){ return this.service.childAll('pagos'); }
  @Get('pagos/:id') pagosOne(@Param('id') id:string){ return this.service.childOne('pagos',+id); }
  @Post('pagos') pagosCreate(@Body() b:any){ return this.service.childCreate('pagos',b); }
  @Patch('pagos/:id') pagosUpdate(@Param('id') id:string,@Body() b:any){ return this.service.childUpdate('pagos',+id,b); }
  @Delete('pagos/:id') pagosRemove(@Param('id') id:string){ return this.service.childRemove('pagos',+id); }

  @Get('facturas') facturasAll(){ return this.service.childAll('facturas'); }
  @Get('facturas/:id') facturasOne(@Param('id') id:string){ return this.service.childOne('facturas',+id); }
  @Post('facturas') facturasCreate(@Body() b:any){ return this.service.childCreate('facturas',b); }
  @Patch('facturas/:id') facturasUpdate(@Param('id') id:string,@Body() b:any){ return this.service.childUpdate('facturas',+id,b); }
  @Delete('facturas/:id') facturasRemove(@Param('id') id:string){ return this.service.childRemove('facturas',+id); }
}
