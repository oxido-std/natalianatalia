import { Test, TestingModule } from '@nestjs/testing';
import { SabuesosToProfileMetadataService } from './sabuesos_to_profile_metadata.service';

describe('SabuesosToProfileMetadataService', () => {
  let service: SabuesosToProfileMetadataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SabuesosToProfileMetadataService],
    }).compile();

    service = module.get<SabuesosToProfileMetadataService>(SabuesosToProfileMetadataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
