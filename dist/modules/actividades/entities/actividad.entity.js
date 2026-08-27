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
exports.Actividad = void 0;
const typeorm_1 = require("typeorm");
const actividad_historial_entity_1 = require("./actividad-historial.entity");
const actividad_responsable_entity_1 = require("./actividad-responsable.entity");
const actividad_servicio_entity_1 = require("./actividad-servicio.entity");
const actividad_herramienta_entity_1 = require("./actividad-herramienta.entity");
const actividad_evidencia_entity_1 = require("./actividad-evidencia.entity");
const uso_herramienta_entity_1 = require("./uso-herramienta.entity");
const transaccion_financiera_entity_1 = require("./transaccion-financiera.entity");
let Actividad = class Actividad {
    id;
    nombre;
    tipo;
    subtipo;
    loteId;
    subLoteId;
    cultivoId;
    fecha;
    horasActividad;
    precioHoraActividad;
    costoManoObra;
    descripcion;
    estado;
    creadoPorUsuarioId;
    cantidadPlantas;
    kgRecolectados;
    productoAgroId;
    createdAt;
    updatedAt;
    deletedAt;
    historial;
    responsables;
    servicios;
    herramientas;
    evidencias;
    usosHerramientas;
    transaccionesFinancieras;
};
exports.Actividad = Actividad;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Actividad.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 150 }),
    __metadata("design:type", String)
], Actividad.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Actividad.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", Object)
], Actividad.prototype, "subtipo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'loteId', type: 'int', nullable: true }),
    __metadata("design:type", Object)
], Actividad.prototype, "loteId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'subLoteId', type: 'int', nullable: true }),
    __metadata("design:type", Object)
], Actividad.prototype, "subLoteId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cultivoId', type: 'int', nullable: true }),
    __metadata("design:type", Object)
], Actividad.prototype, "cultivoId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Actividad.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double precision', nullable: true }),
    __metadata("design:type", Object)
], Actividad.prototype, "horasActividad", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double precision', nullable: true }),
    __metadata("design:type", Object)
], Actividad.prototype, "precioHoraActividad", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double precision', nullable: true }),
    __metadata("design:type", Object)
], Actividad.prototype, "costoManoObra", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", Object)
], Actividad.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Actividad.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'creado_por_usuario_id', type: 'int', nullable: true }),
    __metadata("design:type", Object)
], Actividad.prototype, "creadoPorUsuarioId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Object)
], Actividad.prototype, "cantidadPlantas", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double precision', nullable: true }),
    __metadata("design:type", Object)
], Actividad.prototype, "kgRecolectados", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'productoAgroId', type: 'int', nullable: true }),
    __metadata("design:type", Object)
], Actividad.prototype, "productoAgroId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Actividad.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Actividad.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at', nullable: true }),
    __metadata("design:type", Object)
], Actividad.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => actividad_historial_entity_1.ActividadHistorial, (item) => item.actividad),
    __metadata("design:type", Array)
], Actividad.prototype, "historial", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => actividad_responsable_entity_1.ActividadResponsable, (item) => item.actividad),
    __metadata("design:type", Array)
], Actividad.prototype, "responsables", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => actividad_servicio_entity_1.ActividadServicio, (item) => item.actividad),
    __metadata("design:type", Array)
], Actividad.prototype, "servicios", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => actividad_herramienta_entity_1.ActividadHerramienta, (item) => item.actividad),
    __metadata("design:type", Array)
], Actividad.prototype, "herramientas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => actividad_evidencia_entity_1.ActividadEvidencia, (item) => item.actividad),
    __metadata("design:type", Array)
], Actividad.prototype, "evidencias", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => uso_herramienta_entity_1.UsoHerramienta, (item) => item.actividad),
    __metadata("design:type", Array)
], Actividad.prototype, "usosHerramientas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => transaccion_financiera_entity_1.TransaccionFinanciera, (item) => item.actividad),
    __metadata("design:type", Array)
], Actividad.prototype, "transaccionesFinancieras", void 0);
exports.Actividad = Actividad = __decorate([
    (0, typeorm_1.Entity)('actividades')
], Actividad);
//# sourceMappingURL=actividad.entity.js.map