import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1786724431502 implements MigrationInterface {
    name = 'InitSchema1786724431502'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "permisos" ("id" SERIAL NOT NULL, "modulo" character varying NOT NULL, "accion" character varying NOT NULL, "clave" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_3127bd9cfeb13ae76186d0d9b38" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "descripcion" character varying, "es_sistema" boolean NOT NULL DEFAULT false, "estado" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "programas_formacion" ("id" SERIAL NOT NULL, "numeroFicha" character varying(20) NOT NULL, "nombre" character varying(100) NOT NULL, "tipo" character varying(50), "descripcion" text, "fechaInicio" date, "fechaFin" date, "estado" character varying, "cantidadAprendices" integer NOT NULL DEFAULT '0', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_df2d0d02ee3e1d8c00a8adc006f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "usuarios" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "apellido" character varying NOT NULL, "identificacion" character varying NOT NULL, "idFicha" character varying, "programaFormacionId" integer, "telefono" character varying, "correo" character varying NOT NULL, "passwordHash" character varying NOT NULL, "emailVerifiedAt" TIMESTAMP, "estado" character varying, "lastLoginAt" TIMESTAMP, "avatarUrl" character varying, "rolId" integer, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tipos_formacion" ("id" SERIAL NOT NULL, "codigo" character varying(50) NOT NULL, "nombre" character varying(100) NOT NULL, "descripcion" text, "activo" boolean NOT NULL DEFAULT true, "orden" integer NOT NULL DEFAULT '0', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_0c1085f5f6cb7779ba26b7efcff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "telegram_form_estado" ("id" SERIAL NOT NULL, "user_id" bigint NOT NULL, "step" character varying(50), "data" jsonb, "estado" character varying(20), "access_token" integer, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_57e747297a77d7f878de501c6bf" UNIQUE ("user_id"), CONSTRAINT "PK_a10f8bae471808ef799131c1853" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "notificaciones" ("id" SERIAL NOT NULL, "usuarioId" integer NOT NULL, "titulo" character varying NOT NULL, "mensaje" text, "leida" boolean NOT NULL DEFAULT false, "tipo" character varying, "metadata" jsonb, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_a9d32a419ff58b53a38b5ef85d4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "email_codes" ("id" SERIAL NOT NULL, "usuarioId" integer NOT NULL, "tipo" character varying(10) NOT NULL, "code" character varying(6) NOT NULL, "expiresAt" TIMESTAMP NOT NULL, "usedAt" TIMESTAMP, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_6ed15013da989317f69306da6e3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "rol_permisos" ("rolId" integer NOT NULL, "permisoId" integer NOT NULL, CONSTRAINT "PK_067796fbfaef54cc93449fa4388" PRIMARY KEY ("rolId", "permisoId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b39138a3ce555d2ecd72ce5754" ON "rol_permisos" ("rolId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a19038a8652d3e0ac882cf2141" ON "rol_permisos" ("permisoId") `);
        await queryRunner.query(`CREATE TABLE "usuarios_permisos" ("usuarioId" integer NOT NULL, "permisoId" integer NOT NULL, CONSTRAINT "PK_1f09d2bdf77871b31160d280a61" PRIMARY KEY ("usuarioId", "permisoId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_dc59163768441da2c17c31a2c7" ON "usuarios_permisos" ("usuarioId") `);
        await queryRunner.query(`CREATE INDEX "IDX_4be7ee93f0a8b3a31ffc9116ae" ON "usuarios_permisos" ("permisoId") `);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD CONSTRAINT "FK_df8c726536a066e51618fd86ad9" FOREIGN KEY ("programaFormacionId") REFERENCES "programas_formacion"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD CONSTRAINT "FK_df0c94be5a01a546bf1b9ca12ae" FOREIGN KEY ("rolId") REFERENCES "roles"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "notificaciones" ADD CONSTRAINT "FK_125b6cc2388b61c1b00c633c673" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "email_codes" ADD CONSTRAINT "FK_591f93ef91a40dca78c240a0254" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rol_permisos" ADD CONSTRAINT "FK_b39138a3ce555d2ecd72ce57540" FOREIGN KEY ("rolId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "rol_permisos" ADD CONSTRAINT "FK_a19038a8652d3e0ac882cf2141e" FOREIGN KEY ("permisoId") REFERENCES "permisos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "usuarios_permisos" ADD CONSTRAINT "FK_dc59163768441da2c17c31a2c75" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "usuarios_permisos" ADD CONSTRAINT "FK_4be7ee93f0a8b3a31ffc9116ae7" FOREIGN KEY ("permisoId") REFERENCES "permisos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios_permisos" DROP CONSTRAINT "FK_4be7ee93f0a8b3a31ffc9116ae7"`);
        await queryRunner.query(`ALTER TABLE "usuarios_permisos" DROP CONSTRAINT "FK_dc59163768441da2c17c31a2c75"`);
        await queryRunner.query(`ALTER TABLE "rol_permisos" DROP CONSTRAINT "FK_a19038a8652d3e0ac882cf2141e"`);
        await queryRunner.query(`ALTER TABLE "rol_permisos" DROP CONSTRAINT "FK_b39138a3ce555d2ecd72ce57540"`);
        await queryRunner.query(`ALTER TABLE "email_codes" DROP CONSTRAINT "FK_591f93ef91a40dca78c240a0254"`);
        await queryRunner.query(`ALTER TABLE "notificaciones" DROP CONSTRAINT "FK_125b6cc2388b61c1b00c633c673"`);
        await queryRunner.query(`ALTER TABLE "usuarios" DROP CONSTRAINT "FK_df0c94be5a01a546bf1b9ca12ae"`);
        await queryRunner.query(`ALTER TABLE "usuarios" DROP CONSTRAINT "FK_df8c726536a066e51618fd86ad9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4be7ee93f0a8b3a31ffc9116ae"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_dc59163768441da2c17c31a2c7"`);
        await queryRunner.query(`DROP TABLE "usuarios_permisos"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a19038a8652d3e0ac882cf2141"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b39138a3ce555d2ecd72ce5754"`);
        await queryRunner.query(`DROP TABLE "rol_permisos"`);
        await queryRunner.query(`DROP TABLE "email_codes"`);
        await queryRunner.query(`DROP TABLE "notificaciones"`);
        await queryRunner.query(`DROP TABLE "telegram_form_estado"`);
        await queryRunner.query(`DROP TABLE "tipos_formacion"`);
        await queryRunner.query(`DROP TABLE "usuarios"`);
        await queryRunner.query(`DROP TABLE "programas_formacion"`);
        await queryRunner.query(`DROP TABLE "roles"`);
        await queryRunner.query(`DROP TABLE "permisos"`);
    }

}
