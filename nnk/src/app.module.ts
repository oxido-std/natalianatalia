import { Module } from '@nestjs/common';
import * as dotenv from 'dotenv'
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { EnvConfiguration } from './common/config/app.config';

import { ProfilesModule } from './profiles/profiles.module';
import { SabuesosModule } from './sabuesos/sabuesos.module';
import { BuchesModule } from './buches/buches.module';
import { SabuesosToProfileMetadataModule } from './sabuesos_to_profile_metadata/sabuesos_to_profile_metadata.module';
import { ProfilesHistoryModule } from './profiles_history/profiles_history.module';
import { ProfilesDataModule } from './profiles_data/profiles_data.module';
import { BuchesToProfilesDataModule } from './buches_to_profiles_data/buches_to_profiles_data.module';
import { ProfilesFilesModule } from './profiles_files/profiles_files.module';
import { SeedModule } from './seed/seed.module';

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ EnvConfiguration ],
    }),
    MongooseModule.forRoot(`mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}`),
    ProfilesModule, 
    SabuesosModule, 
    BuchesModule, 
    SabuesosToProfileMetadataModule, 
    ProfilesHistoryModule, 
    ProfilesDataModule,
    BuchesToProfilesDataModule,
    ProfilesFilesModule,
    SeedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
