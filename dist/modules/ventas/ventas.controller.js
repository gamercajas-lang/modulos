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
exports.VentasController = void 0;
const common_1 = require("@nestjs/common");
const ventas_service_1 = require("./ventas.service");
let VentasController = class VentasController {
    service;
    constructor(service) {
        this.service = service;
    }
    clientesAll() { return this.service.clientesAll(); }
    clientesOne(id) { return this.service.clientesOne(+id); }
    clientesCreate(b) { return this.service.clientesCreate(b); }
    clientesUpdate(id, b) { return this.service.clientesUpdate(+id, b); }
    clientesRemove(id) { return this.service.clientesRemove(+id); }
    ventasAll() { return this.service.ventasAll(); }
    ventasOne(id) { return this.service.ventasOne(+id); }
    ventasCreate(b) { return this.service.ventasCreate(b); }
    ventasUpdate(id, b) { return this.service.ventasUpdate(+id, b); }
    ventasRemove(id) { return this.service.ventasRemove(+id); }
    detallesAll() { return this.service.childAll('detalles'); }
    detallesOne(id) { return this.service.childOne('detalles', +id); }
    detallesCreate(b) { return this.service.childCreate('detalles', b); }
    detallesUpdate(id, b) { return this.service.childUpdate('detalles', +id, b); }
    detallesRemove(id) { return this.service.childRemove('detalles', +id); }
    pagosAll() { return this.service.childAll('pagos'); }
    pagosOne(id) { return this.service.childOne('pagos', +id); }
    pagosCreate(b) { return this.service.childCreate('pagos', b); }
    pagosUpdate(id, b) { return this.service.childUpdate('pagos', +id, b); }
    pagosRemove(id) { return this.service.childRemove('pagos', +id); }
    facturasAll() { return this.service.childAll('facturas'); }
    facturasOne(id) { return this.service.childOne('facturas', +id); }
    facturasCreate(b) { return this.service.childCreate('facturas', b); }
    facturasUpdate(id, b) { return this.service.childUpdate('facturas', +id, b); }
    facturasRemove(id) { return this.service.childRemove('facturas', +id); }
};
exports.VentasController = VentasController;
__decorate([
    (0, common_1.Get)('clientes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "clientesAll", null);
__decorate([
    (0, common_1.Get)('clientes/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "clientesOne", null);
__decorate([
    (0, common_1.Post)('clientes'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "clientesCreate", null);
__decorate([
    (0, common_1.Patch)('clientes/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "clientesUpdate", null);
__decorate([
    (0, common_1.Delete)('clientes/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "clientesRemove", null);
__decorate([
    (0, common_1.Get)('ventas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "ventasAll", null);
__decorate([
    (0, common_1.Get)('ventas/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "ventasOne", null);
__decorate([
    (0, common_1.Post)('ventas'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "ventasCreate", null);
__decorate([
    (0, common_1.Patch)('ventas/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "ventasUpdate", null);
__decorate([
    (0, common_1.Delete)('ventas/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "ventasRemove", null);
__decorate([
    (0, common_1.Get)('ventas-detalles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "detallesAll", null);
__decorate([
    (0, common_1.Get)('ventas-detalles/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "detallesOne", null);
__decorate([
    (0, common_1.Post)('ventas-detalles'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "detallesCreate", null);
__decorate([
    (0, common_1.Patch)('ventas-detalles/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "detallesUpdate", null);
__decorate([
    (0, common_1.Delete)('ventas-detalles/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "detallesRemove", null);
__decorate([
    (0, common_1.Get)('pagos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "pagosAll", null);
__decorate([
    (0, common_1.Get)('pagos/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "pagosOne", null);
__decorate([
    (0, common_1.Post)('pagos'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "pagosCreate", null);
__decorate([
    (0, common_1.Patch)('pagos/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "pagosUpdate", null);
__decorate([
    (0, common_1.Delete)('pagos/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "pagosRemove", null);
__decorate([
    (0, common_1.Get)('facturas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "facturasAll", null);
__decorate([
    (0, common_1.Get)('facturas/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "facturasOne", null);
__decorate([
    (0, common_1.Post)('facturas'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "facturasCreate", null);
__decorate([
    (0, common_1.Patch)('facturas/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "facturasUpdate", null);
__decorate([
    (0, common_1.Delete)('facturas/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "facturasRemove", null);
exports.VentasController = VentasController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [ventas_service_1.VentasService])
], VentasController);
//# sourceMappingURL=ventas.controller.js.map