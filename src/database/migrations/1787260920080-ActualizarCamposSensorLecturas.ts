import { MigrationInterface, QueryRunner } from "typeorm";

export class ActualizarCamposSensorLecturas1787260920080 implements MigrationInterface {
    name = 'ActualizarCamposSensorLecturas1787260920080'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sensor_lecturas" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "sensor_lecturas" ADD "creado_en" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "sensor_lecturas" ADD "actualizado_en" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "sensor_lecturas" ADD "eliminado_en" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "sensor_lecturas" ADD "unidad" character varying`);
        await queryRunner.query(`ALTER TABLE "sensor_lecturas" ADD "observaciones" character varying`);
        await queryRunner.query(`ALTER TABLE "sensor_lecturas" DROP COLUMN "fecha_lectura"`);
        await queryRunner.query(`ALTER TABLE "sensor_lecturas" ADD "fecha_lectura" TIMESTAMP WITH TIME ZONE NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sensor_lecturas" DROP COLUMN "fecha_lectura"`);
        await queryRunner.query(`ALTER TABLE "sensor_lecturas" ADD "fecha_lectura" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sensor_lecturas" DROP COLUMN "observaciones"`);
        await queryRunner.query(`ALTER TABLE "sensor_lecturas" DROP COLUMN "unidad"`);
        await queryRunner.query(`ALTER TABLE "sensor_lecturas" DROP COLUMN "eliminado_en"`);
        await queryRunner.query(`ALTER TABLE "sensor_lecturas" DROP COLUMN "actualizado_en"`);
        await queryRunner.query(`ALTER TABLE "sensor_lecturas" DROP COLUMN "creado_en"`);
        await queryRunner.query(`ALTER TABLE "sensor_lecturas" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
