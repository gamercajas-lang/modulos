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
exports.UsoHerramienta = void 0;
const typeorm_1 = require("typeorm");
const actividad_entity_1 = require("./actividad.entity");
let UsoHerramienta = class UsoHerramienta {
    id;
    actividadId;
    insumoId;
    horasUsadas;
    depreciacionGenerada;
    valorEnLibrosAntes;
    valorEnLibrosDespues;
    fechaUso;
    actividad;
    createdAt;
    updatedAt;
    deletedAt;
};
exports.UsoHerramienta = UsoHerramienta;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UsoHerramienta.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'actividadId' }),
    __metadata("design:type", Number)
], UsoHerramienta.prototype, "actividadId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'insumoId' }),
    __metadata("design:type", Number)
], UsoHerramienta.prototype, "insumoId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double precision' }),
    __metadata("design:type", Number)
], UsoHerramienta.prototype, "horasUsadas", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double precision' }),
    __metadata("design:type", Number)
], UsoHerramienta.prototype, "depreciacionGenerada", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double precision' }),
    __metadata("design:type", Number)
], UsoHerramienta.prototype, "valorEnLibrosAntes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double precision' }),
    __metadata("design:type", Number)
], UsoHerramienta.prototype, "valorEnLibrosDespues", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], UsoHerramienta.prototype, "fechaUso", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => actividad_entity_1.Actividad, (actividad) => actividad.usosHerramientas, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'actividadId' }),
    __metadata("design:type", actividad_entity_1.Actividad)
], UsoHerramienta.prototype, "actividad", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], UsoHerramienta.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], UsoHerramienta.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at', nullable: true }),
    __metadata("design:type", Object)
], UsoHerramienta.prototype, "deletedAt", void 0);
exports.UsoHerramienta = UsoHerramienta = __decorate([
    (0, typeorm_1.Entity)('usos_herramientas')
], UsoHerramienta);
//# sourceMappingURL=uso-herramienta.entity.js.map