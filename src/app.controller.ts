import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('home')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('my-header', 'test')
  @ApiResponse({
    status: 200,
    description: 'Success Message',
  })
  @ApiResponse({ status: 404, description: 'item not found' })
  getHello(): { message: string } {
    return this.appService.getHello();
  }
}
