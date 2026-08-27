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
exports.TransaccionFinanciera = void 0;
const typeorm_1 = require("typeorm");
const actividad_entity_1 = require("./actividad.entity");
let TransaccionFinanciera = class TransaccionFinanciera {
    id;
    tipo;
    categoria;
    monto;
    descripcion;
    fecha;
    actividadId;
    insumoId;
    ventaId;
    usuarioId;
    actividad;
    createdAt;
    updatedAt;
    deletedAt;
};
exports.TransaccionFinanciera = TransaccionFinanciera;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TransaccionFinanciera.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], TransaccionFinanciera.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], TransaccionFinanciera.prototype, "categoria", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double precision' }),
    __metadata("design:type", Number)
], TransaccionFinanciera.prototype, "monto", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", Object)
], TransaccionFinanciera.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], TransaccionFinanciera.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'actividadId', type: 'int', nullable: true }),
    __metadata("design:type", Object)
], TransaccionFinanciera.prototype, "actividadId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'insumoId', type: 'int', nullable: true }),
    __metadata("design:type", Object)
], TransaccionFinanciera.prototype, "insumoId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ventaId', type: 'int', nullable: true }),
    __metadata("design:type", Object)
], TransaccionFinanciera.prototype, "ventaId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'usuarioId', type: 'int', nullable: true }),
    __metadata("design:type", Object)
], TransaccionFinanciera.prototype, "usuarioId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => actividad_entity_1.Actividad, (actividad) => actividad.transaccionesFinancieras, { onDelete: 'SET NULL', nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'actividadId' }),
    __metadata("design:type", Object)
], TransaccionFinanciera.prototype, "actividad", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], TransaccionFinanciera.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], TransaccionFinanciera.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at', nullable: true }),
    __metadata("design:type", Object)
], TransaccionFinanciera.prototype, "deletedAt", void 0);
exports.TransaccionFinanciera = TransaccionFinanciera = __decorate([
    (0, typeorm_1.Entity)('transacciones_financieras')
], TransaccionFinanciera);
//# sourceMappingURL=transaccion-financiera.entity.js.map