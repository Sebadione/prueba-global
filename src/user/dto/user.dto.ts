import { IsEmail, IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';

class ProfileDTO {

  @IsNotEmpty()
  name: string;

}

export class CreateUserDTO {

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  @IsEmail()
  email: string;

  @IsNumber()
  age: number;

  @ValidateNested()
  @Type(() => ProfileDTO)
  profile: ProfileDTO;
  
}

export class UpdateUserDTO extends PartialType(CreateUserDTO) {}