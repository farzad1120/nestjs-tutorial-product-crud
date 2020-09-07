import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  type HomeMessage = { message: string };
  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toMatchObject<HomeMessage>({
        message: 'Hello World!',
      });
    });
  });
});
