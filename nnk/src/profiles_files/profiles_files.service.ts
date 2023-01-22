import { Injectable } from '@nestjs/common';
import { CreateProfilesFileDto } from './dto/create-profiles_file.dto';
import { UpdateProfilesFileDto } from './dto/update-profiles_file.dto';

@Injectable()
export class ProfilesFilesService {
  create(createProfilesFileDto: CreateProfilesFileDto) {
    return 'This action adds a new profilesFile';
  }

  findAll() {
    return `This action returns all profilesFiles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profilesFile`;
  }

  update(id: number, updateProfilesFileDto: UpdateProfilesFileDto) {
    return `This action updates a #${id} profilesFile`;
  }

  remove(id: number) {
    return `This action removes a #${id} profilesFile`;
  }
}
