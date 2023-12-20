import { type StateSchema } from 'app/providers/storeProvider/config/StateSchema';

export const getPromoProducts = (state: StateSchema) => state.promotional.products;
export const getPromoIsLoading = (state: StateSchema) => state.promotional.isLoading;
export const getPromoError = (state: StateSchema) => state.promotional.error ?? null;
