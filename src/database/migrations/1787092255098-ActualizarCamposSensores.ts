import { MigrationInterface, QueryRunner } from "typeorm";

export class ActualizarCamposSensores1787092255098 implements MigrationInterface {
    name = 'ActualizarCamposSensores1787092255098'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sensores" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "sensores" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "sensores" DROP COLUMN "deleted_at"`);
        await queryRunner.query(`ALTER TABLE "sensores" DROP COLUMN "cultivo_id"`);
        await queryRunner.query(`ALTER TABLE "sensores" ADD "creado_en" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "sensores" ADD "actualizado_en" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "sensores" ADD "eliminado_en" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "sensores" ADD "endpoint_url" character varying`);
        await queryRunner.query(`ALTER TABLE "sensores" ADD "mqtt_topic" character varying`);
        await queryRunner.query(`ALTER TABLE "sensores" ADD "estado" text`);
        await queryRunner.query(`ALTER TABLE "sensores" ADD "cultivoId" integer`);
        await queryRunner.query(`ALTER TABLE "sensores" ADD "creadoPorUsuarioId" integer`);
        await queryRunner.query(`ALTER TABLE "sensores" ALTER COLUMN "estado_conexion" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sensores" ALTER COLUMN "estado_conexion" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sensores" ALTER COLUMN "estado_conexion" SET DEFAULT 'desconectado'`);
        await queryRunner.query(`ALTER TABLE "sensores" ALTER COLUMN "estado_conexion" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sensores" DROP COLUMN "creadoPorUsuarioId"`);
        await queryRunner.query(`ALTER TABLE "sensores" DROP COLUMN "cultivoId"`);
        await queryRunner.query(`ALTER TABLE "sensores" DROP COLUMN "estado"`);
        await queryRunner.query(`ALTER TABLE "sensores" DROP COLUMN "mqtt_topic"`);
        await queryRunner.query(`ALTER TABLE "sensores" DROP COLUMN "endpoint_url"`);
        await queryRunner.query(`ALTER TABLE "sensores" DROP COLUMN "eliminado_en"`);
        await queryRunner.query(`ALTER TABLE "sensores" DROP COLUMN "actualizado_en"`);
        await queryRunner.query(`ALTER TABLE "sensores" DROP COLUMN "creado_en"`);
        await queryRunner.query(`ALTER TABLE "sensores" ADD "cultivo_id" integer`);
        await queryRunner.query(`ALTER TABLE "sensores" ADD "deleted_at" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "sensores" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "sensores" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
