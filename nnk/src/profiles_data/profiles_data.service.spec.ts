import { Test, TestingModule } from '@nestjs/testing';
import { ProfilesDataService } from './profiles_data.service';

describe('ProfilesDataService', () => {
  let service: ProfilesDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfilesDataService],
    }).compile();

    service = module.get<ProfilesDataService>(ProfilesDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
