import { PartialType } from '@nestjs/mapped-types';
import { CreateProfilesHistoryDto } from './create-profiles_history.dto';

export class UpdateProfilesHistoryDto extends PartialType(CreateProfilesHistoryDto) {}
