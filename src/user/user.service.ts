import { BadRequestException, Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { User } from './schemas/user.schema';
import { CreateUserDTO, UpdateUserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  // Verificar si el correo electrónico ya está registrado
  private async checkIfEmailExists(email: string): Promise<void> {
    const existingUser = await this.userModel.findOne({ email }).exec();
    if (existingUser) {
      throw new ConflictException('Email is already in use');
    }
  }

  // Validar si el ID es válido
  private validateObjectId(id: string): void {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid ID');
    }
  }

  async create(userData: CreateUserDTO): Promise<User> {
    await this.checkIfEmailExists(userData.email);
    const createdUser = new this.userModel(userData);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async findById(id: string): Promise<User> {
    this.validateObjectId(id);
    const user = await this.userModel.findById(id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(id: string, userData: UpdateUserDTO): Promise<User> {
    this.validateObjectId(id);

    // Verificar si no hay datos para actualizar
    if (Object.keys(userData).length === 0) {
      throw new BadRequestException('No data to update');
    }

    // Verificar si se está actualizando el correo electrónico
    if (userData.email) {
      await this.checkIfEmailExists(userData.email);
    }

    const updatedUser = await this.userModel.findByIdAndUpdate(id, userData, { new: true });
    if (!updatedUser) throw new NotFoundException('User not found');
    return updatedUser;
  }

  async remove(id: string): Promise<void> {
    this.validateObjectId(id);
    const result = await this.userModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException('User not found');
  }
}
