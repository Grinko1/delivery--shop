import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type ProductPromo, type PromotionalSchema } from '../types/promoProductsSchema';
import { fetchPromotionalProduct } from '../services/promoProducts/fetchPromotionalProduct';

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
    builder.addCase(fetchPromotionalProduct.fulfilled, (state, action: PayloadAction<ProductPromo[]>) => {
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
