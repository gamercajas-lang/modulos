# Proyecto Agro — API REST (NestJS + TypeORM + PostgreSQL/PostGIS)

Backend del sistema agroindustrial (SENA — ADSO), construido en equipo de 6 personas con **Arquitectura Hexagonal (Ports and Adapters)**.

## Tecnologías

- NestJS + TypeScript
- TypeORM + PostgreSQL con extensión **PostGIS** (el modelo usa columnas `geometry`)
- Docker + Docker Compose
- class-validator / class-transformer
- Migraciones TypeORM (sin `synchronize: true`)

## Requisitos previos

- Node.js 18+
- Docker Desktop
- Un cliente de API: Postman, Insomnia o Thunder Client

## Instalación

```bash
git clone <url-del-repositorio>
cd proyecto-agro
npm install
cp .env.example .env   # ajustar credenciales si es necesario
```

## Levantar la base de datos

```bash
docker compose up -d postgres
docker ps   # debe verse agro_postgres corriendo
```

## Ejecutar el proyecto

```bash
npm run start:dev
```

Servidor disponible en `http://localhost:3000`.

## Migraciones

```bash
npm run migration:generate -- src/migrations/NombreDescriptivo
npm run migration:run
npm run migration:revert
```

## Arquitectura Hexagonal

Cada módulo en `src/modules/<nombre>/` sigue esta estructura:

```text
modulo/
├── domain/entities/          → entidades TypeORM
├── application/
│   ├── dto/                  → DTOs con class-validator
│   └── use-cases/            → un caso de uso por operación
├── ports/output/             → interfaces de repositorio
└── adapters/
    ├── input/rest/           → controladores REST
    └── output/persistence/   → repositorios TypeORM
```

Flujo: `Controller → Use Case → Port → Repositorio TypeORM → PostgreSQL`.

## División de módulos y responsables

| Módulo | Carpeta | Responsable |
|---|---|---|
| Usuarios, autenticación y permisos | `src/modules/usuarios` | Persona 1 |
| Cultivos y lotes | `src/modules/cultivos-lotes` | Persona 2 |
| Producción | `src/modules/produccion` | Persona 3 |
| Inventario | `src/modules/inventario` | Persona 3 |
| Proveedores y uso de insumos | `src/modules/proveedores-insumos` | Persona 4 |
| Actividades y ventas | `src/modules/actividades`, `src/modules/ventas` | Persona 5 |
| IoT | `src/modules/iot` | Persona 6 |

## Estado actual

- ✅ Base del proyecto (Docker, TypeORM, migraciones, ValidationPipe).
- ✅ Módulo `cultivos-lotes`: CRUD de `lotes` completo. `sublotes`, `cultivos`, `cultivo_historial`, `epas`, `tipos_cultivos_wiki` y `wiki_tipo_epa` registrados como entidad, CRUD pendiente.
- ⬜ Módulos de las demás 5 personas: pendientes.

## Flujo de trabajo en Git

```text
main
  ↑ (Pull Request)
develop
  ↑ (Pull Request)
feature/persona-X-...
```

Nadie trabaja directo sobre `main`. Cada Pull Request debe describir: qué se hizo, qué endpoints se agregaron, si se creó una migración y qué se probó.

Ramas:
```text
feature/persona-1-usuarios
feature/persona-2-cultivos-lotes
feature/persona-3-produccion-inventario
feature/persona-4-proveedores-insumos
feature/persona-5-actividades-ventas
feature/persona-6-iot-infraestructura
```
