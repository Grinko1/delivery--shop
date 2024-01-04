import { type StateSchema } from 'app/providers/storeProvider/config/StateSchema';

export const getPromoProducts = (state: StateSchema) => state.products.promoProducts;
export const getPromoIsLoading = (state: StateSchema) => state.products.isLoading;
export const getPromoError = (state: StateSchema) => state.products.error ?? null;
