import { PartialType } from '@nestjs/mapped-types';
import { CreateBucheDto } from './create-buche.dto';

export class UpdateBucheDto extends PartialType(CreateBucheDto) {}
