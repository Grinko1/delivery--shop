import { type StateSchema } from 'app/providers/storeProvider/config/StateSchema';

export const getProduct = (state: StateSchema) => state.product.product;
export const getProductIsLoading = (state: StateSchema) => state.product.isLoading;
export const getProductError = (state: StateSchema) => state.product.error;
