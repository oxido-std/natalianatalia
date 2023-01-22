import { PartialType } from '@nestjs/mapped-types';
import { CreateBuchesToProfilesDatumDto } from './create-buches_to_profiles_datum.dto';

export class UpdateBuchesToProfilesDatumDto extends PartialType(CreateBuchesToProfilesDatumDto) {}
