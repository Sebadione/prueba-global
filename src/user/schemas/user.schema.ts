import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class Profile extends Document {

  @Prop( { required: true})
  name: string;

}

@Schema()
export class User extends Document {


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

UserSchema.set('toJSON', {
  transform: (_doc, ret) => {
    delete ret.__v; // Elimina el campo __v 
    return ret;
  },
});