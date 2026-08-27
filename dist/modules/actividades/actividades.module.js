"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActividadesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const actividad_entity_1 = require("./entities/actividad.entity");
const actividad_historial_entity_1 = require("./entities/actividad-historial.entity");
const actividad_evidencia_entity_1 = require("./entities/actividad-evidencia.entity");
const actividad_herramienta_entity_1 = require("./entities/actividad-herramienta.entity");
const actividad_responsable_entity_1 = require("./entities/actividad-responsable.entity");
const actividad_servicio_entity_1 = require("./entities/actividad-servicio.entity");
const uso_herramienta_entity_1 = require("./entities/uso-herramienta.entity");
const transaccion_financiera_entity_1 = require("./entities/transaccion-financiera.entity");
const actividades_controller_1 = require("./actividades.controller");
const actividades_service_1 = require("./actividades.service");
const ACTIVIDAD_ENTITIES = [
    actividad_entity_1.Actividad,
    actividad_historial_entity_1.ActividadHistorial,
    actividad_evidencia_entity_1.ActividadEvidencia,
    actividad_herramienta_entity_1.ActividadHerramienta,
    actividad_responsable_entity_1.ActividadResponsable,
    actividad_servicio_entity_1.ActividadServicio,
    uso_herramienta_entity_1.UsoHerramienta,
    transaccion_financiera_entity_1.TransaccionFinanciera,
];
let ActividadesModule = class ActividadesModule {
};
exports.ActividadesModule = ActividadesModule;
exports.ActividadesModule = ActividadesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature(ACTIVIDAD_ENTITIES)],
        controllers: [actividades_controller_1.ActividadesController],
        providers: [actividades_service_1.ActividadesService],
        exports: [actividades_service_1.ActividadesService],
    })
], ActividadesModule);
//# sourceMappingURL=actividades.module.js.map