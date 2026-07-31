import { TelegramFormEstado } from '../../domain/entities/telegram-form-estado.entity';

export interface TelegramFormEstadoRepositoryPort {
  create(data: Partial<TelegramFormEstado>): Promise<TelegramFormEstado>;
  findByUserId(userId: string): Promise<TelegramFormEstado | null>;
  update(id: number, data: Partial<TelegramFormEstado>): Promise<TelegramFormEstado | null>;
  remove(id: number): Promise<void>;
}

export const TELEGRAM_FORM_ESTADO_REPOSITORY = 'TELEGRAM_FORM_ESTADO_REPOSITORY';
