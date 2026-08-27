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
exports.Factura = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
const venta_entity_1 = require("./venta.entity");
let Factura = class Factura {
    id;
    ventaId;
    numero;
    prefijo;
    fechaEmision;
    vencimiento;
    qrUrl;
    pdfUrl;
    venta;
    createdAt;
    updatedAt;
    deletedAt;
};
exports.Factura = Factura;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Factura.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ventaId' }),
    __metadata("design:type", Number)
], Factura.prototype, "ventaId", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Factura.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", Object)
], Factura.prototype, "prefijo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fechaEmision', type: 'timestamp' }),
    __metadata("design:type", Date)
], Factura.prototype, "fechaEmision", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'vencimiento', type: 'timestamp', nullable: true }),
    __metadata("design:type", Object)
], Factura.prototype, "vencimiento", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'qrUrl', type: 'varchar', length: 500, nullable: true }),
    __metadata("design:type", Object)
], Factura.prototype, "qrUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'pdfUrl', type: 'varchar', length: 500, nullable: true }),
    __metadata("design:type", Object)
], Factura.prototype, "pdfUrl", void 0);
__decorate([
    (0, typeorm_2.ManyToOne)(() => venta_entity_1.Venta, (venta) => venta.facturas, { onDelete: 'CASCADE' }),
    (0, typeorm_2.JoinColumn)({ name: 'ventaId' }),
    __metadata("design:type", venta_entity_1.Venta)
], Factura.prototype, "venta", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Factura.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Factura.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at', nullable: true }),
    __metadata("design:type", Object)
], Factura.prototype, "deletedAt", void 0);
exports.Factura = Factura = __decorate([
    (0, typeorm_1.Entity)('facturas')
], Factura);
//# sourceMappingURL=factura.entity.js.map