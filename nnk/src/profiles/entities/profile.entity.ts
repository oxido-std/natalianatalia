import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { text } from 'stream/consumers';

@Schema()
export class Profile extends Document {

    // id: string // Mongo me lo da
    @Prop({
        unique: true,
        index: true,
    })
    name: string;
    @Prop({
        type:Number
    })
    createdAt: number;
    @Prop({
        type:Number
    })
    updatedAt: number;
    @Prop({
        type:Boolean
    })
    isActive: boolean;

}

export const ProfileSchema = SchemaFactory.createForClass( Profile );