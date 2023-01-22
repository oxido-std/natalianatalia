import { Injectable } from '@nestjs/common';
import { CreateSabuesosToProfileMetadatumDto } from './dto/create-sabuesos_to_profile_metadatum.dto';
import { UpdateSabuesosToProfileMetadatumDto } from './dto/update-sabuesos_to_profile_metadatum.dto';

@Injectable()
export class SabuesosToProfileMetadataService {
  create(createSabuesosToProfileMetadatumDto: CreateSabuesosToProfileMetadatumDto) {
    return 'This action adds a new sabuesosToProfileMetadatum';
  }

  findAll() {
    return `This action returns all sabuesosToProfileMetadata`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sabuesosToProfileMetadatum`;
  }

  update(id: number, updateSabuesosToProfileMetadatumDto: UpdateSabuesosToProfileMetadatumDto) {
    return `This action updates a #${id} sabuesosToProfileMetadatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} sabuesosToProfileMetadatum`;
  }
}
