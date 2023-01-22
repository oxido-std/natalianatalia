import { Module } from '@nestjs/common';
import { SabuesosToProfileMetadataService } from './sabuesos_to_profile_metadata.service';
import { SabuesosToProfileMetadataController } from './sabuesos_to_profile_metadata.controller';

@Module({
  controllers: [SabuesosToProfileMetadataController],
  providers: [SabuesosToProfileMetadataService]
})
export class SabuesosToProfileMetadataModule {}
