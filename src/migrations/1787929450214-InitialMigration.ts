import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1787929450214 implements MigrationInterface {
    name = 'InitialMigration1787929450214'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "proveedores" ("id" SERIAL NOT NULL, "nombre" character varying(255) NOT NULL, "created_at" TIMESTAMP, "updated_at" TIMESTAMP, "deleted_at" TIMESTAMP, CONSTRAINT "PK_1dcf121f19f362fb1b4c0a493a9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "actividad_insumos" ("id" SERIAL NOT NULL, "actividad_id" integer NOT NULL, "insumo_id" integer NOT NULL, "cantidad_usada" double precision NOT NULL, "unidad" character varying(100) NOT NULL, "costo_unitario" double precision NOT NULL, "costo_total" double precision NOT NULL, "created_at" TIMESTAMP, "updated_at" TIMESTAMP, "deleted_at" TIMESTAMP, CONSTRAINT "PK_fb5408a812468877d2ddff781fa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "actividades_insumos_reserva" ("id" SERIAL NOT NULL, "actividad_insumo_id" integer NOT NULL, "reserva_id" integer NOT NULL, "created_at" TIMESTAMP, "updated_at" TIMESTAMP, "deleted_at" TIMESTAMP, CONSTRAINT "PK_3dafed0fb9b36627965a5dd8886" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "actividades_insumos_uso" ("id" SERIAL NOT NULL, "actividadId" integer NOT NULL, "insumoId" integer NOT NULL, "cantidadUsada" double precision NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_0cc0ff2c078a7616db43b05bd30" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "movimientos_insumos" ("id" SERIAL NOT NULL, "insumoId" integer NOT NULL, "tipo" character varying NOT NULL, "cantidadPresentacion" double precision NOT NULL, "cantidadUso" double precision NOT NULL, "costoUnitarioPresentacion" double precision NOT NULL, "costoUnitarioUso" double precision NOT NULL, "costoTotal" double precision NOT NULL, "valorInventarioResultante" double precision NOT NULL, "descripcion" text NOT NULL, "actividadId" integer NOT NULL, "usuarioId" integer NOT NULL, "almacenOrigenId" integer NOT NULL, "almacenDestinoId" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_bc8f3965426ecbfc9ab5424b4f3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reservas" ("id" SERIAL NOT NULL, "insumoId" integer NOT NULL, "cantidad" double precision NOT NULL, "fechaReserva" date NOT NULL, "motivo" character varying NOT NULL, "estado" character varying NOT NULL, "usuarioId" integer NOT NULL, "actividadId" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_309c659053bcf5e56f8e40a2b42" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "reservas"`);
        await queryRunner.query(`DROP TABLE "movimientos_insumos"`);
        await queryRunner.query(`DROP TABLE "actividades_insumos_uso"`);
        await queryRunner.query(`DROP TABLE "actividades_insumos_reserva"`);
        await queryRunner.query(`DROP TABLE "actividad_insumos"`);
        await queryRunner.query(`DROP TABLE "proveedores"`);
    }

}
