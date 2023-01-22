import { Module } from '@nestjs/common';
import { ProfilesFilesService } from './profiles_files.service';
import { ProfilesFilesController } from './profiles_files.controller';

@Module({
  controllers: [ProfilesFilesController],
  providers: [ProfilesFilesService]
})
export class ProfilesFilesModule {}
