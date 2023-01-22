import { Module } from '@nestjs/common';
import { ProfilesDataService } from './profiles_data.service';
import { ProfilesDataController } from './profiles_data.controller';

@Module({
  controllers: [ProfilesDataController],
  providers: [ProfilesDataService]
})
export class ProfilesDataModule {}
