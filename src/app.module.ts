/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: null,
    database: 'test',
    entities: [],
    synchronize: true,
  }),
    PostModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
