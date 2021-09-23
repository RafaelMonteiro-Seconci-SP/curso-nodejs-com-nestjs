/* eslint-disable prettier/prettier */
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export const initSwagger = (app: INestApplication) => {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('ContratosAPI')
    .addBearerAuth()
    .setDescription(
      'Por aqui será possivel testar todas as APIs do portal contratos.',
    )
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/docs', app, document);
};