import { IsString, IsInt, IsBoolean, IsArray } from 'class-validator';

export interface NeedPosistionType {
  NeedPosistionName: string;
  NeedPosistionNumber: number;
}

export class CreatePostsDto {
  @IsString()
  readonly Title: string;

  @IsString()
  readonly Detail: string;

  readonly NeedPosistion: Array<NeedPosistionType>;

  @IsInt()
  readonly ApplyCount: number;

  @IsBoolean()
  readonly IsRecruiting: boolean;

  @IsArray()
  readonly UploadTag: Array<string>;

  @IsString()
  readonly ExpireDate: string;

  @IsString()
  readonly Id: string;
}
