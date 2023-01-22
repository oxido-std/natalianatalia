import { Test, TestingModule } from '@nestjs/testing';
import { BuchesToProfilesDataService } from './buches_to_profiles_data.service';

describe('BuchesToProfilesDataService', () => {
  let service: BuchesToProfilesDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuchesToProfilesDataService],
    }).compile();

    service = module.get<BuchesToProfilesDataService>(BuchesToProfilesDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
