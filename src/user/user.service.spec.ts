import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getModelToken } from '@nestjs/mongoose'
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { BadRequestException, NotFoundException } from '@nestjs/common';

describe('UserService', () => {

  let service: UserService;
  let model: Model<User>;

  const mockUser = {
    _id: '60f6e5b6f1e3eb2f8c474b5d',
    username: 'John Doe',
    password: '1234',
    email: 'johndoe@example.com',
    age: 30,
    profile: {
      _id: '60f6e5b6f1e3eb2f8c474b5e',
      name: 'John Doe',
    },
  }
  const mockService = {
    findById: jest.fn(),
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService,
        {
          provide: getModelToken(User.name),
          useValue: mockService,
        }

      ],
    }).compile();

    service = module.get<UserService>(UserService);
    model = module.get<Model<User>>(getModelToken(User.name));
  });

  describe('findById', () => {
    it('should return a user', async () => {
      jest.spyOn(model, 'findById').mockResolvedValue(mockUser);
      
      const result = await service.findById(mockUser._id);

      expect(model.findById).toHaveBeenCalledWith(mockUser._id);
      expect(result).toEqual(mockUser);
    });

    it('should throw BadRequestException if Invalid Id', async () => {
      const invalidId = 'invalidId';
      jest.spyOn(model, 'findById').mockResolvedValue(null);

      
      await expect(service.findById(invalidId)).rejects.toThrow(BadRequestException);
    });

    it('should throw NotFoundException if User not found', async () => {
      jest.spyOn(model, 'findById').mockResolvedValue(null);
      
      await expect(service.findById(mockUser._id)).rejects.toThrow(NotFoundException);

      expect(model.findById).toHaveBeenCalledWith(mockUser._id);
    });

  });
});