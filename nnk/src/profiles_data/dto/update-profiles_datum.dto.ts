import { PartialType } from '@nestjs/mapped-types';
import { CreateProfilesDatumDto } from './create-profiles_datum.dto';

export class UpdateProfilesDatumDto extends PartialType(CreateProfilesDatumDto) {}
