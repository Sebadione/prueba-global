import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class Profile extends Document {

  @ApiProperty({ description: 'El nombre del perfil', example: 'John Doe' })
  @Prop( { required: true})
  name: string;

}

@Schema()
export class User extends Document {

  @ApiProperty({ description: 'Nombre de usuario', example: 'johndoe123' })
  @Prop( { required: true })
  username: string;

  @ApiProperty({ description: 'Contraseña del usuario', example: 'password123' })
  @Prop( { required: true })
  password: string;

  @ApiProperty({ description: 'Correo electrónico del usuario', example: 'jdoe@example.com' })
  @Prop( { required: true, unique: true })
  email: string;

  @ApiProperty({ description: 'Edad del usuario', example: 30 })
  @Prop( { required: true })
  age: number;

  @ApiProperty({ description: 'Perfil asociado al usuario', type: Profile })
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