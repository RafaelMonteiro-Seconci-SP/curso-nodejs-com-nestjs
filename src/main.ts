/* eslint-disable prettier/prettier */
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { initSwagger } from 'src/app.swagger';
import { AppModule } from 'src/app.module';
import { URL_PORT } from './config/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();  
  const logger = new Logger('Bootstrap');
  const config = app.get(ConfigService);
  const port = parseInt(config.get<string>(URL_PORT), 10) || 3000

  initSwagger(app);
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    })
  )
  await app.listen(port);
  logger.log(`Server is running in ${ await app.getUrl() }`)
}
bootstrap();
