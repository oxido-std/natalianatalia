import { Injectable } from '@nestjs/common';
import { CreateProfilesHistoryDto } from './dto/create-profiles_history.dto';
import { UpdateProfilesHistoryDto } from './dto/update-profiles_history.dto';

@Injectable()
export class ProfilesHistoryService {
  create(createProfilesHistoryDto: CreateProfilesHistoryDto) {
    return 'This action adds a new profilesHistory';
  }

  findAll() {
    return `This action returns all profilesHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profilesHistory`;
  }

  update(id: number, updateProfilesHistoryDto: UpdateProfilesHistoryDto) {
    return `This action updates a #${id} profilesHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} profilesHistory`;
  }
}
