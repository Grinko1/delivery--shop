export interface Product {
  id: number;
  name: string;
  categoryId: number;
  title: string;
  price: number;
  img: string;
  weigth: string;
  newPrice?: number;
}

export interface ProductsSchema {
  isLoading: boolean;
  error?: string;
  products: Product[];
  activeCategory: string;
  popularProducts: Product[];
  promoProducts: Product[];
  _inited: boolean;
  categoryId?: number;
}
