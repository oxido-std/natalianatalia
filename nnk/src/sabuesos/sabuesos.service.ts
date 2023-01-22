import { Injectable } from '@nestjs/common';
import { CreateSabuesoDto } from './dto/create-sabueso.dto';
import { UpdateSabuesoDto } from './dto/update-sabueso.dto';

@Injectable()
export class SabuesosService {
  create(createSabuesoDto: CreateSabuesoDto) {
    return 'This action adds a new sabueso';
  }

  findAll() {
    return `This action returns all sabuesos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sabueso`;
  }

  update(id: number, updateSabuesoDto: UpdateSabuesoDto) {
    return `This action updates a #${id} sabueso`;
  }

  remove(id: number) {
    return `This action removes a #${id} sabueso`;
  }
}
