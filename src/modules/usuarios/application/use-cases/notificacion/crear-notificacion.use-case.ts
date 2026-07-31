import { Inject, Injectable } from '@nestjs/common';
import { NOTIFICACION_REPOSITORY, NotificacionRepositoryPort } from '../../../ports/output/notificacion-repository.port';
import { CreateNotificacionDto } from '../../dto/notificacion/create-notificacion.dto';

@Injectable()
export class CrearNotificacionUseCase {
  constructor(
    @Inject(NOTIFICACION_REPOSITORY)
    private readonly repository: NotificacionRepositoryPort,
  ) {}

  execute(dto: CreateNotificacionDto) {
    return this.repository.create(dto);
  }
}
