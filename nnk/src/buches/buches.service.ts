import { Injectable } from '@nestjs/common';
import { CreateBucheDto } from './dto/create-buche.dto';
import { UpdateBucheDto } from './dto/update-buche.dto';

@Injectable()
export class BuchesService {
  create(createBuchDto: CreateBucheDto) {
    return 'This action adds a new buch';
  }

  findAll() {
    return `This action returns all buches`;
  }

  findOne(id: number) {
    return `This action returns a #${id} buche`;
  }

  update(id: number, updateBuchDto: UpdateBucheDto) {
    return `This action updates a #${id} buche`;
  }

  remove(id: number) {
    return `This action removes a #${id} buch`;
  }
}
