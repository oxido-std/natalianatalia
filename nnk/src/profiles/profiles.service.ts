import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { Profile } from './entities/profile.entity';

import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {

  constructor(
    @InjectModel( Profile.name )
    private readonly profileModel: Model<Profile>,
  ){}

  async create(createProfileDto: CreateProfileDto) {
    createProfileDto.name = createProfileDto.name.toLocaleLowerCase();
    createProfileDto.createdAt=Date.now();
    createProfileDto.updatedAt=0;
    createProfileDto.isActive=true;
    try {
      
      const profile = await this.profileModel.create(createProfileDto);
      return profile;

    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAll() {
    // todo: realizar el limit y el offset
    const profiles = await this.profileModel.find();
    return profiles;
  }

  async findOne(id: string) {
    const profile = await this.profileModel.findById(id);
    
    if (!profile) return `Profile with ID: ${id} not exist`
    
    return profile;
  }

  async update(id: string, updateProfileDto: UpdateProfileDto) {
    console.log(updateProfileDto);
    const profile = await this.profileModel.findById(id);
    if(updateProfileDto.name){
      updateProfileDto.name=updateProfileDto.name.toLocaleLowerCase();
      updateProfileDto.createdAt= profile.createdAt;
      updateProfileDto.updatedAt=Number(Date.now());
    }
    try {
      const profileUpdated= await this.profileModel.updateOne(updateProfileDto);
      return {...profile.toJSON(), ...profileUpdated};
    } catch (error) {
      this.handleExceptions(error)
    }
  }

  async remove(id: string) {
    try {
      const { deletedCount } = await this.profileModel.deleteOne({ _id: id });
      if ( deletedCount === 0 )
        throw new BadRequestException(`Profile with id "${ id }" not found`);
      return `Profile with ID: ${id} is deleted`;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  private handleExceptions( error: any ) {
    if ( error.code === 11000 ) {
      throw new BadRequestException(`Profile exists in db ${ JSON.stringify( error.keyValue ) }`);
    }
    console.log(error);
    throw new InternalServerErrorException(`Can't create profile - Check server logs`);
  }

}
