import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BuchesToProfilesDataService } from './buches_to_profiles_data.service';
import { CreateBuchesToProfilesDatumDto } from './dto/create-buches_to_profiles_datum.dto';
import { UpdateBuchesToProfilesDatumDto } from './dto/update-buches_to_profiles_datum.dto';

@Controller('buches-to-profiles-data')
export class BuchesToProfilesDataController {
  constructor(private readonly buchesToProfilesDataService: BuchesToProfilesDataService) {}

  @Post()
  create(@Body() createBuchesToProfilesDatumDto: CreateBuchesToProfilesDatumDto) {
    return this.buchesToProfilesDataService.create(createBuchesToProfilesDatumDto);
  }

  @Get()
  findAll() {
    return this.buchesToProfilesDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buchesToProfilesDataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBuchesToProfilesDatumDto: UpdateBuchesToProfilesDatumDto) {
    return this.buchesToProfilesDataService.update(+id, updateBuchesToProfilesDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buchesToProfilesDataService.remove(+id);
  }
}
