import { Test, TestingModule } from '@nestjs/testing';
import { BuchesService } from './buches.service';

describe('BuchesService', () => {
  let service: BuchesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuchesService],
    }).compile();

    service = module.get<BuchesService>(BuchesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
