import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SabuesosToProfileMetadataService } from './sabuesos_to_profile_metadata.service';
import { CreateSabuesosToProfileMetadatumDto } from './dto/create-sabuesos_to_profile_metadatum.dto';
import { UpdateSabuesosToProfileMetadatumDto } from './dto/update-sabuesos_to_profile_metadatum.dto';

@Controller('sabuesos-to-profile-metadata')
export class SabuesosToProfileMetadataController {
  constructor(private readonly sabuesosToProfileMetadataService: SabuesosToProfileMetadataService) {}

  @Post()
  create(@Body() createSabuesosToProfileMetadatumDto: CreateSabuesosToProfileMetadatumDto) {
    return this.sabuesosToProfileMetadataService.create(createSabuesosToProfileMetadatumDto);
  }

  @Get()
  findAll() {
    return this.sabuesosToProfileMetadataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sabuesosToProfileMetadataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSabuesosToProfileMetadatumDto: UpdateSabuesosToProfileMetadatumDto) {
    return this.sabuesosToProfileMetadataService.update(+id, updateSabuesosToProfileMetadatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sabuesosToProfileMetadataService.remove(+id);
  }
}
