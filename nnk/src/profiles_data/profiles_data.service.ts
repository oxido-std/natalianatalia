import { Injectable } from '@nestjs/common';
import { CreateProfilesDatumDto } from './dto/create-profiles_datum.dto';
import { UpdateProfilesDatumDto } from './dto/update-profiles_datum.dto';

@Injectable()
export class ProfilesDataService {
  create(createProfilesDatumDto: CreateProfilesDatumDto) {
    return 'This action adds a new profilesDatum';
  }

  findAll() {
    return `This action returns all profilesData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profilesDatum`;
  }

  update(id: number, updateProfilesDatumDto: UpdateProfilesDatumDto) {
    return `This action updates a #${id} profilesDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} profilesDatum`;
  }
}
