import { IsBoolean, IsDateString, IsMongoId, IsOptional, IsString, MinLength } from "class-validator";

export class CreateProfileDto {


    @IsOptional()
    @IsMongoId()
    id:string;
    @IsString()
    @MinLength(1)
    name:string;
    @IsOptional()
    createdAt:number;
    @IsOptional()
    updatedAt:number;
    @IsOptional()
    @IsBoolean()
    isActive:boolean;

}
