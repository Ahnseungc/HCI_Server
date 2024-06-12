import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { NeedPosistionType } from '../dto/posts.dto';
import { Document, SchemaOptions } from 'mongoose';

//스키마 옵션
const options: SchemaOptions = {
  timestamps: true,
};

export type PostsDocument = Posts & Document;

//@Schema() 스키마 정의
@Schema(options)
export class Posts extends Document {
  @Prop()
  Id: string;
  @Prop()
  Title: string;
  @Prop()
  Detail: string;
  @Prop()
  NeedPosistion: Array<NeedPosistionType>;
  @Prop()
  ApplyCount: number;
  @Prop()
  IsRecruiting: boolean;
  @Prop()
  UploadTag: Array<string>;
  @Prop()
  ExpireDate: string;
}

export const PostsSchema = SchemaFactory.createForClass(Posts);
