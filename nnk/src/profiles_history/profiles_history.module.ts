import { Module } from '@nestjs/common';
import { ProfilesHistoryService } from './profiles_history.service';
import { ProfilesHistoryController } from './profiles_history.controller';

@Module({
  controllers: [ProfilesHistoryController],
  providers: [ProfilesHistoryService]
})
export class ProfilesHistoryModule {}
