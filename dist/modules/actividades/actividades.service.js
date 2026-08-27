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
exports.ActividadesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const actividad_entity_1 = require("./entities/actividad.entity");
const actividad_historial_entity_1 = require("./entities/actividad-historial.entity");
const actividad_responsable_entity_1 = require("./entities/actividad-responsable.entity");
const actividad_servicio_entity_1 = require("./entities/actividad-servicio.entity");
const actividad_herramienta_entity_1 = require("./entities/actividad-herramienta.entity");
const actividad_evidencia_entity_1 = require("./entities/actividad-evidencia.entity");
const uso_herramienta_entity_1 = require("./entities/uso-herramienta.entity");
const transaccion_financiera_entity_1 = require("./entities/transaccion-financiera.entity");
let ActividadesService = class ActividadesService {
    actividades;
    historial;
    responsables;
    servicios;
    herramientas;
    evidencias;
    usos;
    transacciones;
    constructor(actividades, historial, responsables, servicios, herramientas, evidencias, usos, transacciones) {
        this.actividades = actividades;
        this.historial = historial;
        this.responsables = responsables;
        this.servicios = servicios;
        this.herramientas = herramientas;
        this.evidencias = evidencias;
        this.usos = usos;
        this.transacciones = transacciones;
    }
    async findAll() {
        return this.actividades.find({
            relations: ['historial', 'responsables', 'servicios', 'herramientas', 'evidencias', 'usosHerramientas', 'transaccionesFinancieras'],
        });
    }
    async findOne(id) {
        const item = await this.actividades.findOne({
            where: { id },
            relations: ['historial', 'responsables', 'servicios', 'herramientas', 'evidencias', 'usosHerramientas', 'transaccionesFinancieras'],
        });
        if (!item)
            throw new common_1.NotFoundException(`Actividad ${id} no encontrada`);
        return item;
    }
    async create(data) {
        return this.actividades.save(this.actividades.create(data));
    }
    async update(id, data) {
        await this.findOne(id);
        return this.actividades.save({ id, ...data });
    }
    async remove(id) {
        const item = await this.findOne(id);
        await this.actividades.softRemove(item);
        return { message: 'Actividad eliminada', id };
    }
    repoMap() {
        return {
            historial: this.historial,
            responsables: this.responsables,
            servicios: this.servicios,
            herramientas: this.herramientas,
            evidencias: this.evidencias,
            usos: this.usos,
            transacciones: this.transacciones,
        };
    }
    async children(kind) {
        return this.repoMap()[kind].find();
    }
    async child(kind, id) {
        const item = await this.repoMap()[kind].findOne({ where: { id } });
        if (!item)
            throw new common_1.NotFoundException(`${kind} ${id} no encontrado`);
        return item;
    }
    async createChild(kind, data) {
        return this.repoMap()[kind].save(data);
    }
    async updateChild(kind, id, data) {
        await this.child(kind, id);
        return this.repoMap()[kind].save({ id, ...data });
    }
    async removeChild(kind, id) {
        const item = await this.child(kind, id);
        await this.repoMap()[kind].softRemove(item);
        return { message: 'Registro eliminado', id };
    }
};
exports.ActividadesService = ActividadesService;
exports.ActividadesService = ActividadesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(actividad_entity_1.Actividad)),
    __param(1, (0, typeorm_1.InjectRepository)(actividad_historial_entity_1.ActividadHistorial)),
    __param(2, (0, typeorm_1.InjectRepository)(actividad_responsable_entity_1.ActividadResponsable)),
    __param(3, (0, typeorm_1.InjectRepository)(actividad_servicio_entity_1.ActividadServicio)),
    __param(4, (0, typeorm_1.InjectRepository)(actividad_herramienta_entity_1.ActividadHerramienta)),
    __param(5, (0, typeorm_1.InjectRepository)(actividad_evidencia_entity_1.ActividadEvidencia)),
    __param(6, (0, typeorm_1.InjectRepository)(uso_herramienta_entity_1.UsoHerramienta)),
    __param(7, (0, typeorm_1.InjectRepository)(transaccion_financiera_entity_1.TransaccionFinanciera)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ActividadesService);
//# sourceMappingURL=actividades.service.js.map