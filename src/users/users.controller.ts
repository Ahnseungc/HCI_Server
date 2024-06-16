import { Controller, Get, Post, Body, Query, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schema/users.schema';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';

@Controller('api')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('user')
  async create(@Body() user: CreateUserDto): Promise<User> {
    return this.usersService.create(user);
  }

  @Get('user')
  async find(@Query('kakaoId') kakaoId: string): Promise<User[]> {
    return this.usersService.findUser(kakaoId);
  }

  @Put('updateuser')
  async updateUser(
    @Query('kakaoId') kakaoId: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.updateUser(kakaoId, updateUserDto);
  }
}
