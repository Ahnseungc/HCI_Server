import { Body, Controller, Get, Post, Query } from '@nestjs/common';
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

  @Get('posts')
  async getPosts(@Query('id') id: string): Promise<Posts[]> {
    return this.postsService.getPosts(id);
  }

  @Get('postsAll')
  async getAllPosts(): Promise<Posts[]> {
    return this.postsService.getAllPosts();
  }

  @Get('postsDetail')
  async findPosts(@Query('writeid') writeid: string): Promise<Posts[]> {
    console.log(writeid);
    return this.postsService.findPosts(writeid);
  }
}
