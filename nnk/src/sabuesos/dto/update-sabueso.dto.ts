import { PartialType } from '@nestjs/mapped-types';
import { CreateSabuesoDto } from './create-sabueso.dto';

export class UpdateSabuesoDto extends PartialType(CreateSabuesoDto) {}
