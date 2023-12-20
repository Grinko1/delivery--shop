export interface Product {
  id: number;
  name: string;
  categoryId: number;
  title: string;
  price: number;
  img: string;
  weigth: string;
}

export interface ProductsSchema {
  isLoading: boolean;
  error?: string;
  products: Product[];
  activeCategory: string;
  popularProducts: Product[];
  _inited: boolean;
  categoryId?: number;
}
