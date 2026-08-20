import { MigrationInterface, QueryRunner } from "typeorm";

export class ActualizarCamposSensorAlertas1787257525752 implements MigrationInterface {
    name = 'ActualizarCamposSensorAlertas1787257525752'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sensor_alertas" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "sensor_alertas" DROP COLUMN "tipo_alerta"`);
        await queryRunner.query(`ALTER TABLE "sensor_alertas" DROP COLUMN "valor_detectado"`);
        await queryRunner.query(`ALTER TABLE "sensor_alertas" DROP COLUMN "mensaje"`);
        await queryRunner.query(`ALTER TABLE "sensor_alertas" DROP COLUMN "atendida"`);
        await queryRunner.query(`ALTER TABLE "sensor_alertas" ADD "creado_en" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "sensor_alertas" ADD "actualizado_en" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "sensor_alertas" ADD "eliminado_en" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "sensor_alertas" ADD "valor" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sensor_alertas" ADD "umbral" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sensor_alertas" ADD "tipo" character varying(10) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sensor_alertas" DROP COLUMN "tipo"`);
        await queryRunner.query(`ALTER TABLE "sensor_alertas" DROP COLUMN "umbral"`);
        await queryRunner.query(`ALTER TABLE "sensor_alertas" DROP COLUMN "valor"`);
        await queryRunner.query(`ALTER TABLE "sensor_alertas" DROP COLUMN "eliminado_en"`);
        await queryRunner.query(`ALTER TABLE "sensor_alertas" DROP COLUMN "actualizado_en"`);
        await queryRunner.query(`ALTER TABLE "sensor_alertas" DROP COLUMN "creado_en"`);
        await queryRunner.query(`ALTER TABLE "sensor_alertas" ADD "atendida" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "sensor_alertas" ADD "mensaje" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sensor_alertas" ADD "valor_detectado" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sensor_alertas" ADD "tipo_alerta" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sensor_alertas" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
