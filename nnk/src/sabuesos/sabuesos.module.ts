import { Module } from '@nestjs/common';
import { SabuesosService } from './sabuesos.service';
import { SabuesosController } from './sabuesos.controller';

@Module({
  controllers: [SabuesosController],
  providers: [SabuesosService]
})
export class SabuesosModule {}
