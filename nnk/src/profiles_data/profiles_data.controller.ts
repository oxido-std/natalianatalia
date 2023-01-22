import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfilesDataService } from './profiles_data.service';
import { CreateProfilesDatumDto } from './dto/create-profiles_datum.dto';
import { UpdateProfilesDatumDto } from './dto/update-profiles_datum.dto';

@Controller('profiles-data')
export class ProfilesDataController {
  constructor(private readonly profilesDataService: ProfilesDataService) {}

  @Post()
  create(@Body() createProfilesDatumDto: CreateProfilesDatumDto) {
    return this.profilesDataService.create(createProfilesDatumDto);
  }

  @Get()
  findAll() {
    return this.profilesDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profilesDataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfilesDatumDto: UpdateProfilesDatumDto) {
    return this.profilesDataService.update(+id, updateProfilesDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profilesDataService.remove(+id);
  }
}
