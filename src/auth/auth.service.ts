import { Injectable } from '@nestjs/common';
import { User, UserDocument } from '../users/schema/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(newUser: User): Promise<User> {
    const createdUser = new this.userModel(newUser);
    return createdUser.save();
  }
  async findUserByKakaoId(kakaoId: string): Promise<User | null> {
    return this.userModel.findOne({ kakaoId }).exec();
  }
}
