import { EmailCode } from '../../domain/entities/email-code.entity';

export interface EmailCodeRepositoryPort {
  create(data: Partial<EmailCode>): Promise<EmailCode>;
  findById(id: number): Promise<EmailCode | null>;
  findValidCode(usuarioId: number, tipo: string, code: string): Promise<EmailCode | null>;
  remove(id: number): Promise<void>;
}

export const EMAIL_CODE_REPOSITORY = 'EMAIL_CODE_REPOSITORY';
