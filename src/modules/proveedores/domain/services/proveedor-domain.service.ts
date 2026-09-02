import { Injectable } from '@nestjs/common';
import { Proveedor } from '../entities/proveedor.entity';

@Injectable()
export class ProveedorDomainService {

  validarNombre(nombre: string): boolean {
    return nombre.trim().length > 0;
  }

  crearProveedor(nombre: string): Proveedor {
    const proveedor = new Proveedor();
    proveedor.nombre = nombre;

    return proveedor;
  }

}