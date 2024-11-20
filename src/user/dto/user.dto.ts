import { IsEmail, IsNotEmpty, IsNumber, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

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

export class UpdateUserDTO {

  @IsOptional()
  @IsNotEmpty()
  username?: string;

  @IsOptional()
  @IsNotEmpty()
  password?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsNumber()
  age?: number;

  @IsOptional()
  @ValidateNested()
  @Type(() => ProfileDTO)
  profile?: ProfileDTO;
}