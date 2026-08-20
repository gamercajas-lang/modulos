import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSensorAlertas1787089270423 implements MigrationInterface {
    name = 'InitSensorAlertas1787089270423'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sensor_alertas" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "sensor_id" integer NOT NULL, "lote_id" integer, "sub_lote_id" integer, "tipo_alerta" character varying NOT NULL, "valor_detectado" double precision NOT NULL, "mensaje" character varying NOT NULL, "atendida" boolean NOT NULL DEFAULT false, "fecha_alerta" TIMESTAMP NOT NULL, CONSTRAINT "PK_982ef165c7399c3445d6ef2fa5b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "sensor_alertas"`);
    }
}
