import { Injectable } from '@nestjs/common';
import { CreateBuchesToProfilesDatumDto } from './dto/create-buches_to_profiles_datum.dto';
import { UpdateBuchesToProfilesDatumDto } from './dto/update-buches_to_profiles_datum.dto';

@Injectable()
export class BuchesToProfilesDataService {
  create(createBuchesToProfilesDatumDto: CreateBuchesToProfilesDatumDto) {
    return 'This action adds a new buchesToProfilesDatum';
  }

  findAll() {
    return `This action returns all buchesToProfilesData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} buchesToProfilesDatum`;
  }

  update(id: number, updateBuchesToProfilesDatumDto: UpdateBuchesToProfilesDatumDto) {
    return `This action updates a #${id} buchesToProfilesDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} buchesToProfilesDatum`;
  }
}
