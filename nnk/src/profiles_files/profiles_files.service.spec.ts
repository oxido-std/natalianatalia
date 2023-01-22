import { Test, TestingModule } from '@nestjs/testing';
import { ProfilesFilesService } from './profiles_files.service';

describe('ProfilesFilesService', () => {
  let service: ProfilesFilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfilesFilesService],
    }).compile();

    service = module.get<ProfilesFilesService>(ProfilesFilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
