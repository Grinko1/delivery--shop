export { getProducts, getPopularProducts, getProductsError, getProductsIsLoading } from './model/selectors/getProducts';

export { productsReducer } from './model/slices/productsSlice';

export { Products } from './ui/Products/Products';
export type { ProductsSchema, Product } from './model/types/productsSchema';
