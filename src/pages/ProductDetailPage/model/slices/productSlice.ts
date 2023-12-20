import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type ProductSchema } from '../types/productSchema';
import { fetchProduct } from '../services/fetchProduct';
import { type Product } from 'entities/products';

const initialState: ProductSchema = {
  isLoading: false,
  error: '',
  product: undefined
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state, action) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action: PayloadAction<Product>) => {
      state.isLoading = false;
      state.product = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});

export const { actions: productActions } = productSlice;
export const { reducer: productReducer } = productSlice;
