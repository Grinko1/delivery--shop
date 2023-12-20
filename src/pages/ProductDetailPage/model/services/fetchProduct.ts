import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/storeProvider/config/StateSchema';
import { type Product } from 'entities/products';

export const fetchProduct = createAsyncThunk<Product, string, ThunkConfig<string>>(
  'products/fetchProduct',
  async (id, { extra, rejectWithValue, getState }) => {
    try {
      const response = await extra.api.get<Product>(`/products/${id}`);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e: any) {
      return rejectWithValue(e.response.data.message || 'unexpected error');
    }
  }
);
