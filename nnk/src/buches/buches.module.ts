import { Module } from '@nestjs/common';
import { BuchesService } from './buches.service';
import { BuchesController } from './buches.controller';

@Module({
  controllers: [BuchesController],
  providers: [BuchesService]
})
export class BuchesModule {}
