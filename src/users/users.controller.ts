import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schema/users.schema';
import { CreateUserDto } from './dto/users.dto';

@Controller('api')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('user')
  async create(@Body() user: CreateUserDto): Promise<User> {
    return this.usersService.create(user);
  }

  @Get('user')
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
