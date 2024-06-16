import { IsString, IsInt, IsArray, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly kakaoId: string;

  @IsString()
  readonly username: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly NickName: string;

  @IsString()
  readonly SchoolName: string;

  @IsString()
  readonly SchoolMajor: string;

  @IsInt()
  readonly SchoolNumber: string;

  @IsString()
  readonly Posistion: string;

  @IsArray()
  readonly Skill: Array<string>;
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  readonly Skill?: string;
}
