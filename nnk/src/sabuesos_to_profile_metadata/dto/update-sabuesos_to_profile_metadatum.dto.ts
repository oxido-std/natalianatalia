import { PartialType } from '@nestjs/mapped-types';
import { CreateSabuesosToProfileMetadatumDto } from './create-sabuesos_to_profile_metadatum.dto';

export class UpdateSabuesosToProfileMetadatumDto extends PartialType(CreateSabuesosToProfileMetadatumDto) {}
