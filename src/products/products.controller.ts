import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Logger,
  Patch,
  Delete,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiResponse,
  ApiParam,
} from '@nestjs/swagger';
import { CreateProductDto } from './createProductDto';
import { Product } from './product.model';
import { ProductsService } from './products.service';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  @ApiOkResponse({
    status: 200,
    description: 'Returns list of products',
  })
  list(): Array<Product> {
    return this.productsService.list();
  }

  @Get(':id')
  @ApiOkResponse({
    status: 200,
    description: 'Returns product info',
  })
  @ApiParam({
    name: 'id',
    type: 'string',
    description: 'Product Id goes here',
  })
  info(@Param('id') id: string): Product {
    return this.productsService.info(id);
  }

  @Post()
  @ApiOkResponse({
    status: 201,
    description: 'Product has been created successfully.',
  })
  @ApiBadRequestResponse({ status: 400, description: 'Bad Request Response' })
  @ApiResponse({ status: 433, description: 'Validation Error' })
  create(@Body() createProductDto: CreateProductDto): Product {
    return this.productsService.create(createProductDto);
  }

  @Patch(':id')
  @ApiOkResponse({
    status: 200,
    description: 'Update Product',
  })
  @ApiParam({
    name: 'id',
    type: 'string',
    description: 'Product Id goes here',
  })
  update(
    @Param('id') id: string,
    @Body() updateProductDto: CreateProductDto,
  ): Product {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    status: 200,
    description: 'Returns product info',
  })
  @ApiParam({
    name: 'id',
    type: 'string',
    description: 'Product Id goes here',
  })
  delete(@Param('id') id: string): Product {
    return this.productsService.delete(id);
  }
}
