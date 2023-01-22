import { Module } from '@nestjs/common';
import { BuchesToProfilesDataService } from './buches_to_profiles_data.service';
import { BuchesToProfilesDataController } from './buches_to_profiles_data.controller';

@Module({
  controllers: [BuchesToProfilesDataController],
  providers: [BuchesToProfilesDataService]
})
export class BuchesToProfilesDataModule {}
