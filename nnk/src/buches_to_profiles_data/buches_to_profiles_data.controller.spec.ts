import { Test, TestingModule } from '@nestjs/testing';
import { BuchesToProfilesDataController } from './buches_to_profiles_data.controller';
import { BuchesToProfilesDataService } from './buches_to_profiles_data.service';

describe('BuchesToProfilesDataController', () => {
  let controller: BuchesToProfilesDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuchesToProfilesDataController],
      providers: [BuchesToProfilesDataService],
    }).compile();

    controller = module.get<BuchesToProfilesDataController>(BuchesToProfilesDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
