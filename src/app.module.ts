/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HOST, NAME, PASSWORD, PORT, USERNAME } from './config/constants';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
    inject:[ConfigService],
    useFactory: (config: ConfigService) => ({
      type: 'mysql',
      host: config.get<string>(HOST),
      port: parseInt(config.get<string>(PORT)),
      username: config.get<string>(USERNAME),
      password: config.get<string>(PASSWORD),
      database: config.get<string>(NAME),
      entities: [__dirname + './**//**//*entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
    })
  }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    PostModule,
    UserModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
/**
 *
 */