import { IsEmail, IsNotEmpty, IsNumber, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class ProfileDTO {
  @ApiProperty({ description: 'El nombre del perfil', example: 'John Doe' })
  @IsNotEmpty()
  name: string;
}

export class CreateUserDTO {
  @ApiProperty({ description: 'Nombre de usuario', example: 'johndoe123' })
  @IsNotEmpty()
  username: string;

  @ApiProperty({ description: 'Contraseña del usuario', example: 'password123' })
  @IsNotEmpty()
  password: string;

  @ApiProperty({ description: 'Correo electrónico del usuario', example: 'jdoe@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Edad del usuario', example: 30 })
  @IsNumber()
  age: number;

  @ApiProperty({ description: 'Perfil asociado al usuario', type: ProfileDTO })
  @ValidateNested()
  @Type(() => ProfileDTO)
  profile: ProfileDTO;
}

export class UpdateUserDTO {
  @ApiProperty({ description: 'Nombre de usuario (opcional)', example: 'johndoe123', required: false })
  @IsOptional()
  @IsNotEmpty()
  username?: string;

  @ApiProperty({ description: 'Contraseña del usuario (opcional)', example: 'newpassword123', required: false })
  @IsOptional()
  @IsNotEmpty()
  password?: string;

  @ApiProperty({ description: 'Correo electrónico del usuario (opcional)', example: 'john.new@example.com', required: false })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ description: 'Edad del usuario (opcional)', example: 35, required: false })
  @IsOptional()
  @IsNumber()
  age?: number;

  @ApiProperty({ description: 'Perfil asociado al usuario (opcional)', type: ProfileDTO, required: false })
  @IsOptional()
  @ValidateNested()
  @Type(() => ProfileDTO)
  profile?: ProfileDTO;
}
