import { IsString, MinLength } from "class-validator";
import { IsUUID } from "class-validator/types/decorator/decorators";

export class CreateProfileDto {


    id:number;
    @IsString()
    @MinLength(1)
    name:string;
    createdAt:string;
    isActive:boolean;

}
