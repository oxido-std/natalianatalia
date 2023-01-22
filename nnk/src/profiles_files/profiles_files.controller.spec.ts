import { Test, TestingModule } from '@nestjs/testing';
import { ProfilesFilesController } from './profiles_files.controller';
import { ProfilesFilesService } from './profiles_files.service';

describe('ProfilesFilesController', () => {
  let controller: ProfilesFilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfilesFilesController],
      providers: [ProfilesFilesService],
    }).compile();

    controller = module.get<ProfilesFilesController>(ProfilesFilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
