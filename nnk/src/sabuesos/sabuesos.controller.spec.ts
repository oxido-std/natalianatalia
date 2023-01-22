import { Test, TestingModule } from '@nestjs/testing';
import { SabuesosController } from './sabuesos.controller';
import { SabuesosService } from './sabuesos.service';

describe('SabuesosController', () => {
  let controller: SabuesosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SabuesosController],
      providers: [SabuesosService],
    }).compile();

    controller = module.get<SabuesosController>(SabuesosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
