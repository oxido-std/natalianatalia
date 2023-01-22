import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BuchesService } from './buches.service';
import { CreateBucheDto } from './dto/create-buche.dto';
import { UpdateBucheDto } from './dto/update-buche.dto';

@Controller('buches')
export class BuchesController {
  constructor(private readonly buchesService: BuchesService) {}

  @Post()
  create(@Body() createBucheDto: CreateBucheDto) {
    return this.buchesService.create(createBucheDto);
  }

  @Get()
  findAll() {
    return this.buchesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buchesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBucheDto: UpdateBucheDto) {
    return this.buchesService.update(+id, updateBucheDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buchesService.remove(+id);
  }
}
