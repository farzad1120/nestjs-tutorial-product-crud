import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    name: 'title',
    description: 'Title of Product',
    type: 'string',
    example: 'CPU Core i7',
  })
  title: string;

  @ApiProperty({
    name: 'price',
    type: 'number',
    description: 'Price of Product',
    example: 120000,
    minimum: 0,
    maximum: 100000000,
  })
  price: number;

  @ApiProperty({
    name: 'description',
    type: 'string',
    description: 'Description of Product',
    default: null,
    required: false,
    maxLength: 255,
    example: 'This is one of the best cpus in the market',
  })
  description: string;
}
