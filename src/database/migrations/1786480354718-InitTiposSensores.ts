import { MigrationInterface, QueryRunner } from "typeorm";

export class InitTiposSensores1786480354718 implements MigrationInterface {
    name = 'InitTiposSensores1786480354718'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tipos_sensores" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "nombre" character varying NOT NULL, "unidad" character varying NOT NULL, "decimales" integer NOT NULL, "descripcion" character varying, "imagen" character varying, "ttl_minutos" integer NOT NULL, CONSTRAINT "PK_3421868655076bc65fe3e356046" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tipos_sensores"`);
    }

}
