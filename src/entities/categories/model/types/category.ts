export interface Subcategory {
  id: number;
  title: string;
  link: string;
}
export interface Category {
  id: number;
  title: string;
  link: string;
  img: string;
  subcategory?: Subcategory[];
}

export interface CategoriesSchema {
  isLoading: boolean;
  error?: string;
  categories: Category[] | undefined;
}
