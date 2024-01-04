export { getPromoProducts } from './model/selectors/getPromoProducts/getPromoProducts';

export { fetchPopularProducts } from './model/services/popularProducts/fetchPopularProducts';

export { getPopularProducts } from './model/selectors/getPopularProducts/getPopularProducts';

export { initProductList } from './model/services/products/initProductList';

export {
  getProducts,
  getProductsError,
  getProductsIsLoading,
  getCategoryName
} from './model/selectors/getProducts/getProducts';

export { productsReducer } from './model/slices/productsSlice';

export { Products } from './ui/products/Products/Products';
export type { ProductsSchema, Product } from './model/types/productsSchema';
