import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type Product, type PromotionalSchema } from '../types/promotional';
import { fetchPromotionalProduct } from '../services/fetchPromotionalProduct';
// import { type Profile, type ProfileSchema } from '../types/profile';

const initialState: PromotionalSchema = {
  isLoading: false,
  error: undefined,
  products: undefined
};

export const promotionalSlice = createSlice({
  name: 'promotional',
  initialState,
  reducers: {},
  extraReducers (builder) {
    builder.addCase(fetchPromotionalProduct.pending, (state, action) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(fetchPromotionalProduct.fulfilled, (state, action: PayloadAction<Product[]>) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchPromotionalProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});

export const { actions: promotionalActions } = promotionalSlice;
export const { reducer: promotionalReducer } = promotionalSlice;
