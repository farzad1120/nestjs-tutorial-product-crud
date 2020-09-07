import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

const port = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('NestJS API example')
    .setDescription('The NestJS API example description')
    .setVersion('1.0')
    .addTag('home', 'Home API')
    .addTag('products', 'Products API')
    .setContact(
      'Farzad M. Zarasvand',
      'https://fz1.ir',
      'dev.farzadz@gmail.com',
    )
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(port || 3000, () =>
    Logger.debug(`App has been started at port ${port}.`, 'Bootstrap'),
  );
}
bootstrap();
