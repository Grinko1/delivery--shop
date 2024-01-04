import { type StateSchema } from 'app/providers/storeProvider/config/StateSchema';

export const getCartProducts = (state: StateSchema) => state.cart.products;
export const getCartTotal = (state: StateSchema) => state.cart.total;
export const getCartTotalQtt = (state: StateSchema) => state.cart.totalQuantity;
export const getIdsInCart = (state: StateSchema) => state.cart.ids;
