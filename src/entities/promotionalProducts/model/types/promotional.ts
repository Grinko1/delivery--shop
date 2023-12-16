export interface Product {
  id: number;
  name: string;
  category: string;
  title: string;
  price: number;
  img: string;
  weigth: string;
}

export interface PromotionalSchema {
  products: Product[] | undefined;
  isLoading: boolean;
  error?: string;
}
