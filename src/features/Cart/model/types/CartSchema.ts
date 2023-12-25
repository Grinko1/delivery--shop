import { type Product } from 'entities/products';

export interface ProductInCart extends Product {
  qtt: number;
}
export interface CartSchema {
  products: ProductInCart[];
  total: number;
  totalQuantity: number;
}
