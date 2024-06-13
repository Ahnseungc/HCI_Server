import { IsString, IsInt } from 'class-validator';

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
}
