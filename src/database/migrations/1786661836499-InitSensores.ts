import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSensores1786661836499 implements MigrationInterface {
    name = 'InitSensores1786661836499'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sensores" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "nombre_sensor" character varying NOT NULL, "tipo_sensor_id" integer NOT NULL, "global_config_id" integer NOT NULL, "protocolo" character varying NOT NULL, "valor_minimo_sensor" double precision NOT NULL, "valor_maximo_sensor" double precision NOT NULL, "activo" boolean NOT NULL DEFAULT true, "estado_conexion" character varying NOT NULL DEFAULT 'desconectado', "ultimo_valor" character varying, "ultima_medicion" TIMESTAMP, "last_seen_at" TIMESTAMP, "lote_id" integer, "sub_lote_id" integer, "cultivo_id" integer, CONSTRAINT "PK_17e80466352f77aff22e06ad334" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "sensores"`);
    }

}
