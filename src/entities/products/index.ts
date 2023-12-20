export { fetchPopularProducts } from './model/services/popularProducts/fetchPopularProducts';

export { promotionalReducer } from './model/slices/promotionalSlice';

export { PromotionalProduct } from './ui/promoProducts/PromotionalProduct';

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
export type { PromotionalSchema } from './model/types/promoProductsSchema';
