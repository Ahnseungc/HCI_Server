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

  @IsString()
  readonly UploadTag: string;

  @IsString()
  readonly ExpireDate: string;

  @IsString()
  readonly id: string;

  @IsString()
  readonly Writer: string;

  @IsString()
  readonly writeid: string;

  @IsArray()
  readonly UserList: Array<string>;
}
