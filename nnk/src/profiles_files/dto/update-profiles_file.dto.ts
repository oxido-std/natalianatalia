import { PartialType } from '@nestjs/mapped-types';
import { CreateProfilesFileDto } from './create-profiles_file.dto';

export class UpdateProfilesFileDto extends PartialType(CreateProfilesFileDto) {}
