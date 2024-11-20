import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import e from 'express';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class Profile extends Document {

  @Prop( { required: true })
  id: number;

  @Prop( { required: true, unique: true })
  name: string;

}

@Schema()
export class User extends Document {

  @Prop( { required: true })
  id: number;

  @Prop( { required: true })
  username: string;

  @Prop( { required: true })
  password: string;

  @Prop( { required: true, unique: true })
  email: string;

  @Prop( { required: true })
  age: number;

  @Prop({ required: true, type: Profile })
  profile: Profile;

}

export const UserSchema = SchemaFactory.createForClass(User);