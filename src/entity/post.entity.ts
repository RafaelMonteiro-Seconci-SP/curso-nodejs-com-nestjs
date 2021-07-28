/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('testes')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  slug: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  excerpt: string;

  @Column()
  category: string;

  @Column()
  tags: string[];

  @Column()
  status: boolean;
}
