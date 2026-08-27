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
exports.ActividadResponsable = void 0;
const typeorm_1 = require("typeorm");
const actividad_entity_1 = require("./actividad.entity");
let ActividadResponsable = class ActividadResponsable {
    id;
    actividadId;
    usuarioId;
    horas;
    precioHora;
    costo;
    actividad;
    createdAt;
    updatedAt;
    deletedAt;
};
exports.ActividadResponsable = ActividadResponsable;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ActividadResponsable.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'actividadId' }),
    __metadata("design:type", Number)
], ActividadResponsable.prototype, "actividadId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'usuarioId' }),
    __metadata("design:type", Number)
], ActividadResponsable.prototype, "usuarioId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double precision', nullable: true }),
    __metadata("design:type", Object)
], ActividadResponsable.prototype, "horas", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double precision', nullable: true }),
    __metadata("design:type", Object)
], ActividadResponsable.prototype, "precioHora", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double precision', nullable: true }),
    __metadata("design:type", Object)
], ActividadResponsable.prototype, "costo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => actividad_entity_1.Actividad, (actividad) => actividad.responsables, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'actividadId' }),
    __metadata("design:type", actividad_entity_1.Actividad)
], ActividadResponsable.prototype, "actividad", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], ActividadResponsable.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], ActividadResponsable.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at', nullable: true }),
    __metadata("design:type", Object)
], ActividadResponsable.prototype, "deletedAt", void 0);
exports.ActividadResponsable = ActividadResponsable = __decorate([
    (0, typeorm_1.Entity)('actividades_responsables')
], ActividadResponsable);
//# sourceMappingURL=actividad-responsable.entity.js.map