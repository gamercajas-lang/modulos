import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
} from 'typeorm';

/**
 * user_id referencia al chat_id de Telegram (no a usuarios.id),
 * por lo que no se define una relacion con UsuarioOrmEntity.
 */
@Entity('telegram_form_estado')
export class TelegramFormEstadoOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'bigint', name: 'user_id', unique: true })
  userId: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  step: string | null;

  @Column({ type: 'jsonb', nullable: true })
  data: Record<string, any> | null;

  @Column({ type: 'varchar', length: 20, nullable: true })
  estado: string;

  @Column({ type: 'integer', nullable: true, name: 'access_token' })
  accessToken: number | null;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
