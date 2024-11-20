import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { User } from './schemas/user.schema';
import { CreateUserDTO, UpdateUserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(userData: CreateUserDTO): Promise<User> {
    try {
      const createdUser = new this.userModel(userData);
    return createdUser.save();
    } catch (error) {
      throw new BadRequestException('Error creating user');
    }
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {

    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid ID');
    }
    const user = await this.userModel.findById(id).exec();
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(id: string, userData: UpdateUserDTO): Promise<User> {

    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid ID');
    }
    const updatedUser = await this.userModel.findByIdAndUpdate(id, userData, { new: true }).exec();
    if (!updatedUser) throw new NotFoundException('User not found');
    return updatedUser;
  }

  async remove(id: string): Promise<void> {

    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid ID');
    }
    const result = await this.userModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException('User not found');
  }
}
