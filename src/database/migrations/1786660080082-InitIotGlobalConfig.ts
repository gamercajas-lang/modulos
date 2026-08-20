import { MigrationInterface, QueryRunner } from "typeorm";

export class InitIotGlobalConfig1786660080082 implements MigrationInterface {
    name = 'InitIotGlobalConfig1786660080082'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "iot_global_config" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, "broker" character varying NOT NULL, "port" integer NOT NULL, "protocol" character varying NOT NULL, "topic_prefix" character varying NOT NULL, "lote_id" integer, "sub_lote_id" integer, "activo" boolean NOT NULL DEFAULT true, "auto_discover" boolean NOT NULL DEFAULT false, "default_sensors_initialized" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_a8b84a85152d2dd48919f4d1480" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "iot_global_config"`);
    }

}
