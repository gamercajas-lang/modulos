import { MigrationInterface, QueryRunner } from "typeorm";

export class ActualizarCamposIotGlobalConfig1787264242615 implements MigrationInterface {
    name = 'ActualizarCamposIotGlobalConfig1787264242615'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "iot_global_config" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" DROP COLUMN "deleted_at"`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" DROP COLUMN "broker"`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" DROP COLUMN "port"`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" DROP COLUMN "protocol"`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" DROP COLUMN "topic_prefix"`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" DROP COLUMN "default_sensors_initialized"`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" ADD "creado_en" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" ADD "actualizado_en" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" ADD "eliminado_en" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" ADD "nombre" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" ADD "agente" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" ADD "puerto" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" ADD "protocolo" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" ADD "prefijo_tema" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" ADD "temas_predeterminados" text`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" ADD "temas_personalizados" text`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" ADD "nombre_usuario" character varying`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" ADD "contrasena" character varying`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" ADD "sensores_predeterminados_inicializados" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "iot_global_config" DROP COLUMN "sensores_predeterminados_inicializados"`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" DROP COLUMN "contrasena"`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" DROP COLUMN "nombre_usuario"`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" DROP COLUMN "temas_personalizados"`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" DROP COLUMN "temas_predeterminados"`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" DROP COLUMN "prefijo_tema"`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" DROP COLUMN "protocolo"`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" DROP COLUMN "puerto"`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" DROP COLUMN "agente"`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" DROP COLUMN "eliminado_en"`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" DROP COLUMN "actualizado_en"`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" DROP COLUMN "creado_en"`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" ADD "default_sensors_initialized" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" ADD "topic_prefix" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" ADD "protocol" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" ADD "port" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" ADD "broker" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" ADD "deleted_at" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "iot_global_config" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
