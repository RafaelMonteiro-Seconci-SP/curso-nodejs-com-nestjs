import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePostDto, EditPostDto } from '../dtos';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}
  @Get()
  async getMany() {
    const data = await this.postService.getMany();
    return {
      message: 'Petição correta',
      data,
    };
  }
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.postService.getOne(id);
  }
  @Post()
  postOne(@Body() dto: CreatePostDto) {
    const post = this.postService.postOne(dto);
    return {
      message: 'Petição correta',
      post,
    };
  }
  @Put(':id')
  putOne(@Param('id') id: number, @Body() dto: EditPostDto) {
    return this.postService.putOne(id, dto);
  }
  @Delete(':id')
  deletOne(@Param('id') id: number) {
    return this.postService.deletOne(id);
  }
}
