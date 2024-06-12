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
  NickName: string;
  @Prop()
  SchoolName: string;
  @Prop()
  SchoolNumber: number;
  @Prop()
  SchoolMajor: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
