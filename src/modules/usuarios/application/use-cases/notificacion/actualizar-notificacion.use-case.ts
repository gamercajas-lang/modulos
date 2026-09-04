import { Inject, Injectable } from '@nestjs/common';
import { NOTIFICACION_REPOSITORY, NotificacionRepositoryPort } from '../../../ports/output/notificacion-repository.port';
import { UpdateNotificacionDto } from '../../dto/notificacion/update-notificacion.dto';

@Injectable()
export class ActualizarNotificacionUseCase {
  constructor(
    @Inject(NOTIFICACION_REPOSITORY)
    private readonly repository: NotificacionRepositoryPort,
  ) {}

  execute(id: number, dto: UpdateNotificacionDto) {
    return this.repository.update(id, dto);
  }
}
