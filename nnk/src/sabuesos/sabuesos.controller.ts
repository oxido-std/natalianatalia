import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SabuesosService } from './sabuesos.service';
import { CreateSabuesoDto } from './dto/create-sabueso.dto';
import { UpdateSabuesoDto } from './dto/update-sabueso.dto';

@Controller('sabuesos')
export class SabuesosController {
  constructor(private readonly sabuesosService: SabuesosService) {}

  @Post()
  create(@Body() createSabuesoDto: CreateSabuesoDto) {
    return this.sabuesosService.create(createSabuesoDto);
  }

  @Get()
  findAll() {
    return this.sabuesosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sabuesosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSabuesoDto: UpdateSabuesoDto) {
    return this.sabuesosService.update(+id, updateSabuesoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sabuesosService.remove(+id);
  }
}
