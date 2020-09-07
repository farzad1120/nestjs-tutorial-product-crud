import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const port = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port || 3000, () =>
    Logger.debug(`App has been started at port ${port}.`, 'Bootstrap'),
  );
}
bootstrap();
