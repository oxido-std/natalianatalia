import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { EnvConfiguration } from './common/config/app.config';

import { ProfilesModule } from './profiles/profiles.module';
import { SabuesosModule } from './sabuesos/sabuesos.module';
import { BuchesModule } from './buches/buches.module';
import { ProfilesMetadataModule } from './profiles_metadata/profiles_metadata.module';
import { SabuesosToProfileMetadataModule } from './sabuesos_to_profile_metadata/sabuesos_to_profile_metadata.module';
import { ProfilesHistoryModule } from './profiles_history/profiles_history.module';
import { BuchesToProfilesMetadataModule } from './buches_to_profiles_metadata/buches_to_profiles_metadata.module';
import { ProfilesDataModule } from './profiles_data/profiles_data.module';
import { BuchesToProfilesDataModule } from './buches_to_profiles_data/buches_to_profiles_data.module';
import { ProfilesFilesModule } from './profiles_files/profiles_files.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ EnvConfiguration ],
    }),
    // TypeOrmModule.forRoot({      
    //   type: 'mysql',
    //   host: process.env.DB_HOST,
    //   port: +process.env.DB_PORT,
    //   database: process.env.DB_NAME,
    //   username: process.env.DB_USER,
    //   password: process.env.DB_PASSW,
    //   autoLoadEntities: true,
    //   // synchronize: true // solo para DEV
    // }),
    ProfilesModule, 
    SabuesosModule, 
    BuchesModule, 
    ProfilesMetadataModule, 
    SabuesosToProfileMetadataModule, 
    ProfilesHistoryModule, 
    BuchesToProfilesMetadataModule, 
    ProfilesDataModule, BuchesToProfilesDataModule, ProfilesFilesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
