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

@Controller('post')
export class PostController {
  @Get()
  getMany() {
    return 'OK';
  }
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    console.log(typeof id);
    return {
      messagen: 'getOne',
    };
  }
  @Post()
  postOne(@Body() dto: CreatePostDto) {
    return {
      messagen: dto,
    };
  }
  @Put(':id')
  putOne(@Param('id') id: string, @Body() dto: EditPostDto) {
    console.log(id);
    return {
      messagen: dto,
    };
  }
  @Delete(':id')
  deletOne(@Param('id') id: string) {
    console.log(id);
    return {
      messagen: 'deletOne sucess',
    };
  }
}
