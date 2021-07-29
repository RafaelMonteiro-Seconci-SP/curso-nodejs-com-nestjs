/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
//Comunicação com a tabela do banco
import { Post } from 'src/entity/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    // Chamada para a tabela no constutor
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}
  async getMany(): Promise<Post[]> {
    return await this.postRepository.find();
  }
  async postOne(dto: any) {
    const post = this.postRepository.create(dto);
    return await this.postRepository.save(post)
  }
  async getOne(id: number) {
    const post = await this.postRepository.findOne(id);
    if (!post) throw new NotFoundException();
    return post;
  }
  async putOne(id: number, dto: any) {
    const post = await this.postRepository.findOne(id);
    if (!post) throw new NotFoundException('Post does not exist');
    const putPost = Object.assign(post, dto);
    return await this.postRepository.save(putPost)
  }
  async deletOne(id: number) {
    return await this.postRepository.delete(id)
  }
}
