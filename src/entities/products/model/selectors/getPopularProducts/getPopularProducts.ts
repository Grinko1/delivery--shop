import { type StateSchema } from 'app/providers/storeProvider/config/StateSchema';

export const getPopularProducts = (state: StateSchema) => state.products.popularProducts;
