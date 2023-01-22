import { Test, TestingModule } from '@nestjs/testing';
import { SabuesosService } from './sabuesos.service';

describe('SabuesosService', () => {
  let service: SabuesosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SabuesosService],
    }).compile();

    service = module.get<SabuesosService>(SabuesosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
