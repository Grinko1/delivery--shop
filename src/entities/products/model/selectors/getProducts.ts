import { type StateSchema } from 'app/providers/storeProvider/config/StateSchema';

export const getProducts = (state: StateSchema) => state.products.products;
export const getPopularProducts = (state: StateSchema) => state.products.popularProducts;
export const getProductsIsLoading = (state: StateSchema) => state.products.isLoading;
export const getProductsError = (state: StateSchema) => state.products.error;
export const getProductsInited = (state: StateSchema) => state.products._inited;
export const getActiveCategory = (state: StateSchema) => state.products.categoryId;
