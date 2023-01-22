import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfilesHistoryService } from './profiles_history.service';
import { CreateProfilesHistoryDto } from './dto/create-profiles_history.dto';
import { UpdateProfilesHistoryDto } from './dto/update-profiles_history.dto';

@Controller('profiles-history')
export class ProfilesHistoryController {
  constructor(private readonly profilesHistoryService: ProfilesHistoryService) {}

  @Post()
  create(@Body() createProfilesHistoryDto: CreateProfilesHistoryDto) {
    return this.profilesHistoryService.create(createProfilesHistoryDto);
  }

  @Get()
  findAll() {
    return this.profilesHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profilesHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfilesHistoryDto: UpdateProfilesHistoryDto) {
    return this.profilesHistoryService.update(+id, updateProfilesHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profilesHistoryService.remove(+id);
  }
}
