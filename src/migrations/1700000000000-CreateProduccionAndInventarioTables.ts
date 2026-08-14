import { MigrationInterface, QueryRunner, Table, TableForeignKey, TableIndex } from 'typeorm';

export class CreateProduccionAndInventarioTables1700000000000 implements MigrationInterface {
  name = 'CreateProduccionAndInventarioTables1700000000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // 1. Tabla categorias (Inventario)
    await queryRunner.createTable(
      new Table({
        name: 'categorias',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true,
          },
          {
            name: 'nombre',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'descripcion',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'tipo_insumo',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
      true,
    );

    // 2. Tabla almacenes (Inventario)
    await queryRunner.createTable(
      new Table({
        name: 'almacenes',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true,
          },
          {
            name: 'nombre',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'descripcion',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'ubicacion',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
      true,
    );

    // 3. Tabla insumos (Inventario)
    await queryRunner.createTable(
      new Table({
        name: 'insumos',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true,
          },
          {
            name: 'nombre',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'descripcion',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'foto_url',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'presentacion_tipo',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'presentacion_cantidad',
            type: 'double precision',
            isNullable: true,
          },
          {
            name: 'presentacion_unidad',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'unidad_uso',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'tipo_materia',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'factor_conversion_uso',
            type: 'double precision',
            isNullable: true,
          },
          {
            name: 'stock_presentacion',
            type: 'double precision',
            isNullable: true,
          },
          {
            name: 'stock_uso',
            type: 'double precision',
            isNullable: true,
          },
          {
            name: 'precio_unitario_presentacion',
            type: 'double precision',
            isNullable: true,
          },
          {
            name: 'precio_unitario_uso',
            type: 'double precision',
            isNullable: true,
          },
          {
            name: 'valor_inventario',
            type: 'double precision',
            isNullable: true,
          },
          {
            name: 'almacen_id',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'proveedor_id',
            type: 'integer',
            isNullable: true,
            comment: 'FK lógica -> módulo proveedores (proveedores.id)',
          },
          {
            name: 'categoria_id',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'fecha_registro',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'creado_por_usuario_id',
            type: 'integer',
            isNullable: true,
            comment: 'FK lógica -> módulo usuarios (usuarios.id)',
          },
          {
            name: 'tipo_insumo',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'costo_adquisicion',
            type: 'double precision',
            isNullable: true,
          },
          {
            name: 'valor_residual',
            type: 'double precision',
            isNullable: true,
          },
          {
            name: 'vida_util_horas',
            type: 'double precision',
            isNullable: true,
          },
          {
            name: 'horas_usadas',
            type: 'double precision',
            isNullable: true,
          },
          {
            name: 'stock_reservado',
            type: 'double precision',
            isNullable: true,
          },
          {
            name: 'depreciacion_acumulada',
            type: 'double precision',
            isNullable: true,
          },
          {
            name: 'stock_minimo',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'estado',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'costo_unitario',
            type: 'numeric',
            precision: 10,
            scale: 2,
            isNullable: true,
          },
          {
            name: 'fecha_adquisicion',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'fecha_ultimo_mantenimiento',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'fecha_baja',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
        foreignKeys: [
          new TableForeignKey({
            name: 'FK_insumos_almacen',
            columnNames: ['almacen_id'],
            referencedTableName: 'almacenes',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
          }),
          new TableForeignKey({
            name: 'FK_insumos_categoria',
            columnNames: ['categoria_id'],
            referencedTableName: 'categorias',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
          }),
        ],
        indices: [
          new TableIndex({
            name: 'IDX_insumos_almacen_id',
            columnNames: ['almacen_id'],
          }),
          new TableIndex({
            name: 'IDX_insumos_categoria_id',
            columnNames: ['categoria_id'],
          }),
        ],
      }),
      true,
    );

    // 4. Tabla productos_agro (Producción)
    await queryRunner.createTable(
      new Table({
        name: 'productos_agro',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true,
          },
          {
            name: 'nombre',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'unidad_base',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'descripcion',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'imagen',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
      true,
    );

    // 5. Tabla lotes_produccion (Producción)
    await queryRunner.createTable(
      new Table({
        name: 'lotes_produccion',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true,
          },
          {
            name: 'producto_agro_id',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'cultivo_id',
            type: 'integer',
            isNullable: true,
            comment: 'FK lógica -> módulo cultivos (cultivos.id)',
          },
          {
            name: 'lote_id',
            type: 'integer',
            isNullable: true,
            comment: 'FK lógica -> módulo cultivos (lotes.id)',
          },
          {
            name: 'sub_lote_id',
            type: 'integer',
            isNullable: true,
            comment: 'FK lógica -> módulo cultivos (sub_lotes.id)',
          },
          {
            name: 'actividad_cosecha_id',
            type: 'integer',
            isNullable: true,
            comment: 'FK lógica -> módulo actividades (actividades.id)',
          },
          {
            name: 'calidad',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'cantidad_kg',
            type: 'double precision',
            isNullable: true,
          },
          {
            name: 'stock_disponible_kg',
            type: 'double precision',
            isNullable: true,
          },
          {
            name: 'costo_unitario_kg',
            type: 'double precision',
            isNullable: true,
          },
          {
            name: 'costo_total',
            type: 'double precision',
            isNullable: true,
          },
          {
            name: 'precio_sugerido_kg',
            type: 'double precision',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
        foreignKeys: [
          new TableForeignKey({
            name: 'FK_lotes_produccion_producto_agro',
            columnNames: ['producto_agro_id'],
            referencedTableName: 'productos_agro',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
          }),
        ],
        indices: [
          new TableIndex({
            name: 'IDX_lotes_produccion_producto_agro_id',
            columnNames: ['producto_agro_id'],
          }),
        ],
      }),
      true,
    );

    // 6. Tabla movimientos_produccion (Producción)
    await queryRunner.createTable(
      new Table({
        name: 'movimientos_produccion',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true,
          },
          {
            name: 'lote_produccion_id',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'tipo',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'cantidad_kg',
            type: 'double precision',
            isNullable: false,
          },
          {
            name: 'costo_unitario_kg',
            type: 'double precision',
            isNullable: false,
          },
          {
            name: 'costo_total',
            type: 'double precision',
            isNullable: false,
          },
          {
            name: 'venta_id',
            type: 'integer',
            isNullable: true,
            comment: 'FK lógica -> módulo ventas (ventas.id)',
          },
          {
            name: 'descripcion',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'usuario_id',
            type: 'integer',
            isNullable: true,
            comment: 'FK lógica -> módulo usuarios (usuarios.id)',
          },
          {
            name: 'fecha',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
        foreignKeys: [
          new TableForeignKey({
            name: 'FK_movimientos_produccion_lote_produccion',
            columnNames: ['lote_produccion_id'],
            referencedTableName: 'lotes_produccion',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
          }),
        ],
        indices: [
          new TableIndex({
            name: 'IDX_movimientos_produccion_lote_produccion_id',
            columnNames: ['lote_produccion_id'],
          }),
        ],
      }),
      true,
    );

    // 7. Tabla historial_precios_lote (Producción)
    await queryRunner.createTable(
      new Table({
        name: 'historial_precios_lote',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true,
          },
          {
            name: 'lote_produccion_id',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'precio_anterior',
            type: 'double precision',
            isNullable: false,
          },
          {
            name: 'precio_nuevo',
            type: 'double precision',
            isNullable: false,
          },
          {
            name: 'usuario_id',
            type: 'integer',
            isNullable: true,
            comment: 'FK lógica -> módulo usuarios (usuarios.id)',
          },
          {
            name: 'fecha',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'razon',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
        foreignKeys: [
          new TableForeignKey({
            name: 'FK_historial_precios_lote_lote_produccion',
            columnNames: ['lote_produccion_id'],
            referencedTableName: 'lotes_produccion',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
          }),
        ],
        indices: [
          new TableIndex({
            name: 'IDX_historial_precios_lote_lote_produccion_id',
            columnNames: ['lote_produccion_id'],
          }),
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('historial_precios_lote', true, true, true);
    await queryRunner.dropTable('movimientos_produccion', true, true, true);
    await queryRunner.dropTable('lotes_produccion', true, true, true);
    await queryRunner.dropTable('productos_agro', true, true, true);
    await queryRunner.dropTable('insumos', true, true, true);
    await queryRunner.dropTable('almacenes', true, true, true);
    await queryRunner.dropTable('categorias', true, true, true);
  }
}
