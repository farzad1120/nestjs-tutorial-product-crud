import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';
import { v4 as uuidv4 } from 'uuid';
import { CreateProductDto } from './createProductDto';
@Injectable()
export class ProductsService {
  protected products: Product[] = [
    {
      id: 'c5348444-e961-4d64-be49-aaf0e2808b9d',
      title: 'CPU Core i7',
      description: 'This is one of the best cpus in the market',
      price: 120000,
    },
    {
      id: '40a7b213-8f93-4154-b481-f125bc40cdb4',
      title: 'CPU Core i9',
      description: 'This is the best cpu in the world',
      price: 120000,
    },
  ];

  list(): Array<Product> {
    return this.products;
  }

  info(id: string): Product {
    const item = this.products.find(item => item.id === id);
    if (item) {
      return { ...item };
    } else {
      throw new NotFoundException('Could not find the product');
    }
  }

  create(createProductDto: CreateProductDto): Product {
    const product = new Product(
      uuidv4(),
      createProductDto.title,
      createProductDto.description,
      createProductDto.price,
    );
    this.products.push(product);
    return product;
  }

  update(id: string, updateProductDto: CreateProductDto): Product {
    const [product, productIndex] = this.findProductIndex(id);
    const { title, price, description } = updateProductDto;
    const udpatedProduct = { ...product };
    if (title) {
      udpatedProduct.title = title;
    }
    if (price) {
      udpatedProduct.price = price;
    }
    if (description) {
      udpatedProduct.description = description;
    }
    this.products[productIndex] = udpatedProduct;
    return udpatedProduct;
  }

  delete(id: string): Product {
    const [product, productIndex] = this.findProductIndex(id);
    this.products.splice(productIndex, 1);
    return product;
  }

  private findProductIndex(id: string): [Product, number] {
    const productIndex = this.products.findIndex(item => item.id === id);
    if (productIndex === -1) {
      throw new NotFoundException('Product Not Found');
    }
    return [this.products[productIndex], productIndex];
  }
}
