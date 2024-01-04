import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type ProductInCart, type CartSchema } from '../types/CartSchema';

const initialState: CartSchema = {
  products: [],
  total: 0,
  totalQuantity: 0,
  ids: []
};

export const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductInCart>) => {
      const existIndex = state.products.findIndex((product) => product.id === action.payload.id);
      if (existIndex === -1) {
        state.products.push(action.payload);
        state.total += action.payload.price;
        state.totalQuantity += 1;
        state.ids.push(action.payload.id);
      } else {
        state.products[existIndex].qtt += 1;
        state.total += action.payload.price;
        state.totalQuantity += 1;
      }
    },
    removeFromCart: (state, action: PayloadAction<ProductInCart>) => {
      const existIndex = state.products.findIndex((product) => product.id === action.payload.id);
      if (existIndex !== -1) {
        if (state.products[existIndex].qtt > 1) {
          state.products[existIndex].qtt -= 1;
          state.total -= action.payload.price;
          state.totalQuantity -= 1;
        } else {
          state.products.splice(existIndex, 1);
          state.ids = state.ids.filter((id) => id !== action.payload.id);
          state.total -= action.payload.price;
          state.totalQuantity -= 1;
        }
      }
    }
  }
});

export const { actions: CartActions } = CartSlice;
export const { reducer: CartReducer } = CartSlice;
