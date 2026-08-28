import { MigrationInterface, QueryRunner } from "typeorm";

export class AddEpasWikiTables1786714349660 implements MigrationInterface {
    name = 'AddEpasWikiTables1786714349660'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "wiki_tipo_epa" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "descripcion" text, "tipoEpaEnum" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_9dfa111ec6b634a076d666fd852" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "epas" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "tipoEpa" character varying NOT NULL, "descripcion" text, "sintomas" text, "manejoYControl" text, "mesesProbables" integer array, "temporadas" text array, "notasEstacionalidad" text, "fotosSintomas" text array, "fotosGenerales" text array, "tags" text array, "creadoPorUsuarioId" integer, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_8d23543eb1e7a3929bdf5b5805a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tipos_cultivos_wiki" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "descripcion" text, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_b6eab974e49fd96658f753c0886" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "epa_tipos_cultivos_wiki" ("epaId" integer NOT NULL, "tipoCultivoWikiId" integer NOT NULL, CONSTRAINT "PK_293f95ca884d33392b45f8737a3" PRIMARY KEY ("epaId", "tipoCultivoWikiId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_34060e6dafef1f330d1f56c047" ON "epa_tipos_cultivos_wiki" ("epaId") `);
        await queryRunner.query(`CREATE INDEX "IDX_d12419b856941c0e63ed4faa12" ON "epa_tipos_cultivos_wiki" ("tipoCultivoWikiId") `);
        await queryRunner.query(`ALTER TABLE "cultivos" DROP COLUMN "fechaCreacion"`);
        await queryRunner.query(`ALTER TABLE "epa_tipos_cultivos_wiki" ADD CONSTRAINT "FK_34060e6dafef1f330d1f56c047e" FOREIGN KEY ("epaId") REFERENCES "epas"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "epa_tipos_cultivos_wiki" ADD CONSTRAINT "FK_d12419b856941c0e63ed4faa12c" FOREIGN KEY ("tipoCultivoWikiId") REFERENCES "tipos_cultivos_wiki"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "epa_tipos_cultivos_wiki" DROP CONSTRAINT "FK_d12419b856941c0e63ed4faa12c"`);
        await queryRunner.query(`ALTER TABLE "epa_tipos_cultivos_wiki" DROP CONSTRAINT "FK_34060e6dafef1f330d1f56c047e"`);
        await queryRunner.query(`ALTER TABLE "cultivos" ADD "fechaCreacion" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d12419b856941c0e63ed4faa12"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_34060e6dafef1f330d1f56c047"`);
        await queryRunner.query(`DROP TABLE "epa_tipos_cultivos_wiki"`);
        await queryRunner.query(`DROP TABLE "tipos_cultivos_wiki"`);
        await queryRunner.query(`DROP TABLE "epas"`);
        await queryRunner.query(`DROP TABLE "wiki_tipo_epa"`);
    }

}
