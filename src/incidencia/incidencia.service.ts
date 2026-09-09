import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Incidencia } from './entities/incidencia.entity';
import { CreateIncidenciaDto } from './dto/create-incidencia.dto';
import { UpdateIncidenciaDto } from './dto/update-incidencia.dto';

@Injectable()
export class IncidenciaService {

  constructor(
    @InjectRepository(Incidencia)
    private incidenciaRepo: Repository<Incidencia>,
  ) {}

  create(data: CreateIncidenciaDto) {
    const incidencia = this.incidenciaRepo.create(data);
    return this.incidenciaRepo.save(incidencia);
  }

  findAll() {
    return this.incidenciaRepo.find();
  }

  findOne(id: number) {
    return this.incidenciaRepo.findOne({
      where: { id_incidencia: id },
    });
  }

  update(id: number, data: UpdateIncidenciaDto) {
    return this.incidenciaRepo.update(id, data);
  }

  remove(id: number) {
    return this.incidenciaRepo.delete(id);
  }
}