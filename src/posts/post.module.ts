import { MongooseModule } from '@nestjs/mongoose';
import { Posts, PostsSchema } from './schema/posts.schema';
import { UsersController } from 'src/users/users.controller';
import { UsersService } from 'src/users/users.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Posts.name, schema: PostsSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class PostsModule {}
