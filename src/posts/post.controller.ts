import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostsDto } from './dto/posts.dto';
import { Posts } from './schema/posts.schema';

@Controller('api')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post('posts')
  async create(@Body() createPostsDto: CreatePostsDto): Promise<Posts> {
    return this.postsService.create(createPostsDto);
  }

  @Get('posts/:id')
  async findPosts(@Param('id') id: string): Promise<Posts[]> {
    return this.postsService.findPosts(id);
  }
}
