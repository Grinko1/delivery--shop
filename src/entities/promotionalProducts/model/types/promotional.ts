import { type Product } from 'entities/products/model/types/productsSchema';

export interface ProductPromo extends Product {
  newPrice: number;
}

export interface PromotionalSchema {
  products: ProductPromo[] | undefined;
  isLoading: boolean;
  error?: string;
}
