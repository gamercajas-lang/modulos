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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venta = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
const venta_detalle_entity_1 = require("./venta-detalle.entity");
const pago_entity_1 = require("./pago.entity");
const factura_entity_1 = require("./factura.entity");
let Venta = class Venta {
    id;
    fecha;
    clienteId;
    subtotal;
    impuestos;
    descuento;
    total;
    estado;
    usuarioId;
    anuladaPorUsuarioId;
    fechaAnulacion;
    detalles;
    pagos;
    facturas;
    createdAt;
    updatedAt;
    deletedAt;
};
exports.Venta = Venta;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Venta.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Venta.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'clienteId' }),
    __metadata("design:type", Number)
], Venta.prototype, "clienteId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double precision' }),
    __metadata("design:type", Number)
], Venta.prototype, "subtotal", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double precision' }),
    __metadata("design:type", Number)
], Venta.prototype, "impuestos", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double precision' }),
    __metadata("design:type", Number)
], Venta.prototype, "descuento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double precision' }),
    __metadata("design:type", Number)
], Venta.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Venta.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'usuarioId' }),
    __metadata("design:type", Number)
], Venta.prototype, "usuarioId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'anulada_por_usuario_id', type: 'int', nullable: true }),
    __metadata("design:type", Object)
], Venta.prototype, "anuladaPorUsuarioId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_anulacion', type: 'timestamp', nullable: true }),
    __metadata("design:type", Object)
], Venta.prototype, "fechaAnulacion", void 0);
__decorate([
    (0, typeorm_2.OneToMany)(() => venta_detalle_entity_1.VentaDetalle, (detalle) => detalle.venta),
    __metadata("design:type", Array)
], Venta.prototype, "detalles", void 0);
__decorate([
    (0, typeorm_2.OneToMany)(() => pago_entity_1.Pago, (pago) => pago.venta),
    __metadata("design:type", Array)
], Venta.prototype, "pagos", void 0);
__decorate([
    (0, typeorm_2.OneToMany)(() => factura_entity_1.Factura, (factura) => factura.venta),
    __metadata("design:type", Array)
], Venta.prototype, "facturas", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Venta.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Venta.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at', nullable: true }),
    __metadata("design:type", Object)
], Venta.prototype, "deletedAt", void 0);
exports.Venta = Venta = __decorate([
    (0, typeorm_1.Entity)('ventas')
], Venta);
//# sourceMappingURL=venta.entity.js.map