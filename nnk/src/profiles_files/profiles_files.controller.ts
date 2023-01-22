import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfilesFilesService } from './profiles_files.service';
import { CreateProfilesFileDto } from './dto/create-profiles_file.dto';
import { UpdateProfilesFileDto } from './dto/update-profiles_file.dto';

@Controller('profiles-files')
export class ProfilesFilesController {
  constructor(private readonly profilesFilesService: ProfilesFilesService) {}

  @Post()
  create(@Body() createProfilesFileDto: CreateProfilesFileDto) {
    return this.profilesFilesService.create(createProfilesFileDto);
  }

  @Get()
  findAll() {
    return this.profilesFilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profilesFilesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfilesFileDto: UpdateProfilesFileDto) {
    return this.profilesFilesService.update(+id, updateProfilesFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profilesFilesService.remove(+id);
  }
}
