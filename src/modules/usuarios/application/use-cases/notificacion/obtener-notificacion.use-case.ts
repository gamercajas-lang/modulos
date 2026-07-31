import { Inject, Injectable } from '@nestjs/common';
import { NOTIFICACION_REPOSITORY, NotificacionRepositoryPort } from '../../../ports/output/notificacion-repository.port';

@Injectable()
export class ObtenerNotificacionUseCase {
  constructor(
    @Inject(NOTIFICACION_REPOSITORY)
    private readonly repository: NotificacionRepositoryPort,
  ) {}

  execute(id: number) {
    return this.repository.findById(id);
  }
}
