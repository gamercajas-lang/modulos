"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cliente_entity_1 = require("./entities/cliente.entity");
const venta_entity_1 = require("./entities/venta.entity");
const venta_detalle_entity_1 = require("./entities/venta-detalle.entity");
const pago_entity_1 = require("./entities/pago.entity");
const factura_entity_1 = require("./entities/factura.entity");
let VentasService = class VentasService {
    clientes;
    ventas;
    detalles;
    pagos;
    facturas;
    constructor(clientes, ventas, detalles, pagos, facturas) {
        this.clientes = clientes;
        this.ventas = ventas;
        this.detalles = detalles;
        this.pagos = pagos;
        this.facturas = facturas;
    }
    async clientesAll() { return this.clientes.find(); }
    async clientesOne(id) {
        const x = await this.clientes.findOne({ where: { id } });
        if (!x)
            throw new common_1.NotFoundException('Cliente no encontrado');
        return x;
    }
    async clientesCreate(data) {
        return this.clientes.save(this.clientes.create(data));
    }
    async clientesUpdate(id, data) {
        await this.clientesOne(id);
        return this.clientes.save({ id, ...data });
    }
    async clientesRemove(id) {
        const x = await this.clientesOne(id);
        await this.clientes.softRemove(x);
        return { message: 'Cliente eliminado', id };
    }
    async ventasAll() {
        return this.ventas.find({ relations: ['detalles', 'pagos', 'facturas'] });
    }
    async ventasOne(id) {
        const x = await this.ventas.findOne({
            where: { id },
            relations: ['detalles', 'pagos', 'facturas'],
        });
        if (!x)
            throw new common_1.NotFoundException('Venta no encontrada');
        return x;
    }
    async ventasCreate(data) {
        return this.ventas.save(this.ventas.create(data));
    }
    async ventasUpdate(id, data) {
        await this.ventasOne(id);
        return this.ventas.save({ id, ...data });
    }
    async ventasRemove(id) {
        const x = await this.ventasOne(id);
        await this.ventas.softRemove(x);
        return { message: 'Venta eliminada', id };
    }
    map() {
        return {
            detalles: this.detalles,
            pagos: this.pagos,
            facturas: this.facturas,
        };
    }
    async childAll(k) {
        return this.map()[k].find();
    }
    async childOne(k, id) {
        const x = await this.map()[k].findOne({ where: { id } });
        if (!x)
            throw new common_1.NotFoundException('Registro no encontrado');
        return x;
    }
    async childCreate(k, data) {
        return this.map()[k].save(data);
    }
    async childUpdate(k, id, data) {
        await this.childOne(k, id);
        return this.map()[k].save({ id, ...data });
    }
    async childRemove(k, id) {
        const x = await this.childOne(k, id);
        await this.map()[k].softRemove(x);
        return { message: 'Registro eliminado', id };
    }
};
exports.VentasService = VentasService;
exports.VentasService = VentasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cliente_entity_1.Cliente)),
    __param(1, (0, typeorm_1.InjectRepository)(venta_entity_1.Venta)),
    __param(2, (0, typeorm_1.InjectRepository)(venta_detalle_entity_1.VentaDetalle)),
    __param(3, (0, typeorm_1.InjectRepository)(pago_entity_1.Pago)),
    __param(4, (0, typeorm_1.InjectRepository)(factura_entity_1.Factura)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], VentasService);
//# sourceMappingURL=ventas.service.js.map