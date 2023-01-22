import { Test, TestingModule } from '@nestjs/testing';
import { BuchesController } from './buches.controller';
import { BuchesService } from './buches.service';

describe('BuchesController', () => {
  let controller: BuchesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuchesController],
      providers: [BuchesService],
    }).compile();

    controller = module.get<BuchesController>(BuchesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
