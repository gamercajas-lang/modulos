# Santiago_dev — P5 — Actividades y Ventas

Proyecto NestJS independiente y compilable para Persona 5.

## Tablas de P5

### Actividades
- actividades
- actividad_historial
- actividades_responsables
- actividades_servicios
- actividades_herramientas
- actividades_evidencias
- usos_herramientas
- transacciones_financieras

### Ventas
- clientes
- ventas
- ventas_detalles
- pagos
- facturas

## NO pertenece a P5

No se incluye `actividad_insumos`. Esa tabla pertenece a P4/Jhonatan.

Tampoco se incluyen entidades de usuarios, cultivos, lotes, insumos, proveedores, producción o IoT. Las FK hacia esas tablas se mantienen como IDs.

## Ejecutar

```powershell
npm install
npx tsc --noEmit
npm run build
```

La conexión PostgreSQL usa `ConfigService` y `synchronize: false`.
Copia `.env.example` como `.env` y configura tus credenciales locales.

## Corrección de compilación

Se corrigió el problema TS2349 de TypeORM causado por indexar dinámicamente repositorios de entidades diferentes. Los mapas internos ahora usan `Repository<any>` en un único punto controlado.
