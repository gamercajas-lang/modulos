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
exports.VentaDetalle = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
const venta_entity_1 = require("./venta.entity");
let VentaDetalle = class VentaDetalle {
    id;
    ventaId;
    productoAgroId;
    loteProduccionId;
    cultivoId;
    cantidadKg;
    precioUnitarioKg;
    precioTotal;
    costoUnitarioKg;
    costoTotal;
    venta;
    createdAt;
    updatedAt;
    deletedAt;
};
exports.VentaDetalle = VentaDetalle;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], VentaDetalle.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ventaId' }),
    __metadata("design:type", Number)
], VentaDetalle.prototype, "ventaId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'productoAgroId' }),
    __metadata("design:type", Number)
], VentaDetalle.prototype, "productoAgroId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'loteProduccionId', type: 'int', nullable: true }),
    __metadata("design:type", Object)
], VentaDetalle.prototype, "loteProduccionId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cultivoId', type: 'int', nullable: true }),
    __metadata("design:type", Object)
], VentaDetalle.prototype, "cultivoId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double precision' }),
    __metadata("design:type", Number)
], VentaDetalle.prototype, "cantidadKg", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double precision' }),
    __metadata("design:type", Number)
], VentaDetalle.prototype, "precioUnitarioKg", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double precision' }),
    __metadata("design:type", Number)
], VentaDetalle.prototype, "precioTotal", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double precision' }),
    __metadata("design:type", Number)
], VentaDetalle.prototype, "costoUnitarioKg", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double precision' }),
    __metadata("design:type", Number)
], VentaDetalle.prototype, "costoTotal", void 0);
__decorate([
    (0, typeorm_2.ManyToOne)(() => venta_entity_1.Venta, (venta) => venta.detalles, { onDelete: 'CASCADE' }),
    (0, typeorm_2.JoinColumn)({ name: 'ventaId' }),
    __metadata("design:type", venta_entity_1.Venta)
], VentaDetalle.prototype, "venta", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], VentaDetalle.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], VentaDetalle.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at', nullable: true }),
    __metadata("design:type", Object)
], VentaDetalle.prototype, "deletedAt", void 0);
exports.VentaDetalle = VentaDetalle = __decorate([
    (0, typeorm_1.Entity)('ventas_detalles')
], VentaDetalle);
//# sourceMappingURL=venta-detalle.entity.js.map