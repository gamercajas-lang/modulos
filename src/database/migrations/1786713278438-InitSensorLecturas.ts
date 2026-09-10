import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSensorLecturas1786713278438 implements MigrationInterface {
    name = 'InitSensorLecturas1786713278438'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sensor_lecturas" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "sensor_id" integer NOT NULL, "valor" double precision NOT NULL, "fecha_lectura" TIMESTAMP NOT NULL, CONSTRAINT "PK_b447a0350b6c07bb4e90c94b8d4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "sensor_lecturas"`);
    }

}
