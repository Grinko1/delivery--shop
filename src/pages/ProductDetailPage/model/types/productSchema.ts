import { type Product } from 'entities/products';

export interface ProductSchema {
  product: Product | undefined;
  isLoading: boolean;
  error?: string;
}
