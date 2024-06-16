import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Document, SchemaOptions } from 'mongoose';

//스키마 옵션
const options: SchemaOptions = {
  timestamps: true,
};

export type UserDocument = User & Document;

//@Schema() 스키마 정의
@Schema(options)
export class User extends Document {
  @Prop()
  img: string;
  @Prop()
  kakaoId: string;
  @Prop()
  username: string;
  @Prop()
  email: string;
  @Prop()
  NickName: string;
  @Prop()
  SchoolName: string;
  @Prop()
  SchoolNumber: number;
  @Prop()
  SchoolMajor: string;
  @Prop()
  Posistion: string;
  @Prop()
  Skill: [];
}

export const UserSchema = SchemaFactory.createForClass(User);
