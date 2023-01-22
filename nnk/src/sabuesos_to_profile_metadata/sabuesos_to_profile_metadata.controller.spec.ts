import { Test, TestingModule } from '@nestjs/testing';
import { SabuesosToProfileMetadataController } from './sabuesos_to_profile_metadata.controller';
import { SabuesosToProfileMetadataService } from './sabuesos_to_profile_metadata.service';

describe('SabuesosToProfileMetadataController', () => {
  let controller: SabuesosToProfileMetadataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SabuesosToProfileMetadataController],
      providers: [SabuesosToProfileMetadataService],
    }).compile();

    controller = module.get<SabuesosToProfileMetadataController>(SabuesosToProfileMetadataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
