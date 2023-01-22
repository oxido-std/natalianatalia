import { Test, TestingModule } from '@nestjs/testing';
import { ProfilesHistoryService } from './profiles_history.service';

describe('ProfilesHistoryService', () => {
  let service: ProfilesHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfilesHistoryService],
    }).compile();

    service = module.get<ProfilesHistoryService>(ProfilesHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
