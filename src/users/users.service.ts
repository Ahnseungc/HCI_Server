import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema/users.schema';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  async findUser(kakaoId: string): Promise<User[]> {
    return this.userModel.find({ kakaoId }).exec();
  }
  async updateUser(
    kakaoId: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.userModel
      .findOneAndUpdate({ kakaoId }, updateUserDto, { new: true })
      .exec();
  }
}
