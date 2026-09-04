import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialCultivosLotes1787610376992 implements MigrationInterface {
    name = 'InitialCultivosLotes1787610376992'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "wiki_tipo_epa" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "descripcion" text, "tipoEpaEnum" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_9dfa111ec6b634a076d666fd852" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "epas" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "tipoEpa" character varying NOT NULL, "descripcion" text, "sintomas" text, "manejoYControl" text, "mesesProbables" integer array, "temporadas" text array, "notasEstacionalidad" text, "fotosSintomas" text array, "fotosGenerales" text array, "tags" text array, "creadoPorUsuarioId" integer, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_8d23543eb1e7a3929bdf5b5805a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tipos_cultivos_wiki" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "descripcion" text, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_b6eab974e49fd96658f753c0886" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cultivo_historial" ("id" SERIAL NOT NULL, "usuario_id" integer NOT NULL, "motivo" text, "cambios" jsonb, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "cultivo_id" integer, CONSTRAINT "PK_1444e12287840811dfcac8dd99d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cultivos" ("id" SERIAL NOT NULL, "nombreCultivo" character varying NOT NULL, "tipoCultivo" character varying NOT NULL, "descripcion" character varying, "img_cultivo" character varying, "fechaSiembra" date, "fechaFinalizacion" date, "costoTotal" double precision, "estado" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "lote_id" integer, "sublote_id" integer, CONSTRAINT "PK_f7b1d6fc0a6976acd023dca2d3d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lotes" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "geom" geometry(Polygon,4326), "areaM2" numeric(12,2), "areaHa" numeric(12,4), "centroide" geometry(Point,4326), "descripcion" character varying, "estado" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_6eda564423c09706b95cbf8ae1c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sublotes" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "geom" geometry(Polygon,4326), "areaM2" numeric(12,2), "areaHa" numeric(12,4), "centroide" geometry(Point,4326), "descripcion" character varying, "estado" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "lote_id" integer, CONSTRAINT "PK_d456393185ac94c09d904a2bb87" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "epa_tipos_cultivos_wiki" ("epaId" integer NOT NULL, "tipoCultivoWikiId" integer NOT NULL, CONSTRAINT "PK_293f95ca884d33392b45f8737a3" PRIMARY KEY ("epaId", "tipoCultivoWikiId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_34060e6dafef1f330d1f56c047" ON "epa_tipos_cultivos_wiki" ("epaId") `);
        await queryRunner.query(`CREATE INDEX "IDX_d12419b856941c0e63ed4faa12" ON "epa_tipos_cultivos_wiki" ("tipoCultivoWikiId") `);
        await queryRunner.query(`ALTER TABLE "cultivo_historial" ADD CONSTRAINT "FK_7c6f6d2f445179a26f64174299c" FOREIGN KEY ("cultivo_id") REFERENCES "cultivos"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cultivos" ADD CONSTRAINT "FK_d046e8a1232094bdb97b1e412b7" FOREIGN KEY ("lote_id") REFERENCES "lotes"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cultivos" ADD CONSTRAINT "FK_f0e8fdd656a6e986fab1a177dc5" FOREIGN KEY ("sublote_id") REFERENCES "sublotes"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sublotes" ADD CONSTRAINT "FK_a1545f2585322d99f726789dff8" FOREIGN KEY ("lote_id") REFERENCES "lotes"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "epa_tipos_cultivos_wiki" ADD CONSTRAINT "FK_34060e6dafef1f330d1f56c047e" FOREIGN KEY ("epaId") REFERENCES "epas"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "epa_tipos_cultivos_wiki" ADD CONSTRAINT "FK_d12419b856941c0e63ed4faa12c" FOREIGN KEY ("tipoCultivoWikiId") REFERENCES "tipos_cultivos_wiki"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "epa_tipos_cultivos_wiki" DROP CONSTRAINT "FK_d12419b856941c0e63ed4faa12c"`);
        await queryRunner.query(`ALTER TABLE "epa_tipos_cultivos_wiki" DROP CONSTRAINT "FK_34060e6dafef1f330d1f56c047e"`);
        await queryRunner.query(`ALTER TABLE "sublotes" DROP CONSTRAINT "FK_a1545f2585322d99f726789dff8"`);
        await queryRunner.query(`ALTER TABLE "cultivos" DROP CONSTRAINT "FK_f0e8fdd656a6e986fab1a177dc5"`);
        await queryRunner.query(`ALTER TABLE "cultivos" DROP CONSTRAINT "FK_d046e8a1232094bdb97b1e412b7"`);
        await queryRunner.query(`ALTER TABLE "cultivo_historial" DROP CONSTRAINT "FK_7c6f6d2f445179a26f64174299c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d12419b856941c0e63ed4faa12"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_34060e6dafef1f330d1f56c047"`);
        await queryRunner.query(`DROP TABLE "epa_tipos_cultivos_wiki"`);
        await queryRunner.query(`DROP TABLE "sublotes"`);
        await queryRunner.query(`DROP TABLE "lotes"`);
        await queryRunner.query(`DROP TABLE "cultivos"`);
        await queryRunner.query(`DROP TABLE "cultivo_historial"`);
        await queryRunner.query(`DROP TABLE "tipos_cultivos_wiki"`);
        await queryRunner.query(`DROP TABLE "epas"`);
        await queryRunner.query(`DROP TABLE "wiki_tipo_epa"`);
    }

}
