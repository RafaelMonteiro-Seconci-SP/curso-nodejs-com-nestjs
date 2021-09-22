/* eslint-disable prettier/prettier */
import { IsArray, IsBoolean, IsEnum, IsString } from 'class-validator';
import { EnumToString } from '../../common/helpers/enumToString';
import { PostCtegory } from '../enums';

export class CreatePostDto {
  @IsString()
  title: string;
  @IsString()
  slug: string;
  @IsString()
  excerpt: string;
  @IsString()
  content: string;
  @IsEnum(PostCtegory, {
    message: `Opção Inválida. As opções Validas São ${ EnumToString(PostCtegory) }`
  })
  category: PostCtegory;
  @IsArray()
  @IsString({ each: true })
  tags: string[];
  @IsBoolean()
  status: boolean;
}
