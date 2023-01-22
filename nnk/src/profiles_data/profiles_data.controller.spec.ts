import { Test, TestingModule } from '@nestjs/testing';
import { ProfilesDataController } from './profiles_data.controller';
import { ProfilesDataService } from './profiles_data.service';

describe('ProfilesDataController', () => {
  let controller: ProfilesDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfilesDataController],
      providers: [ProfilesDataService],
    }).compile();

    controller = module.get<ProfilesDataController>(ProfilesDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
