import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Posts, PostsDocument } from './schema/posts.schema';
import { CreatePostsDto } from './dto/posts.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Posts.name) private postsModel: Model<PostsDocument>,
  ) {}

  async create(createPostsDto: CreatePostsDto): Promise<Posts> {
    const createPost = new this.postsModel(createPostsDto);
    return createPost.save();
  }

  async getPosts(id: string): Promise<Posts[]> {
    return this.postsModel.find({ id }).exec();
  }
  async getAllPosts(): Promise<Posts[]> {
    return this.postsModel.find().exec();
  }

  async findPosts(writeid: string): Promise<Posts[]> {
    return this.postsModel.find({ writeid }).exec();
  }
}
