import { Test, TestingModule } from '@nestjs/testing';
import { ProfilesHistoryController } from './profiles_history.controller';
import { ProfilesHistoryService } from './profiles_history.service';

describe('ProfilesHistoryController', () => {
  let controller: ProfilesHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfilesHistoryController],
      providers: [ProfilesHistoryService],
    }).compile();

    controller = module.get<ProfilesHistoryController>(ProfilesHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
