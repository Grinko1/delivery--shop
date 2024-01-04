import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/storeProvider/config/StateSchema';
import { type Product } from '../../types/productsSchema';

export const fetchPopularProducts = createAsyncThunk<Product[], void, ThunkConfig<string>>(
  'products/fetchPopularProducts',
  async (_, { extra, rejectWithValue, getState }) => {
    try {
      const response = await extra.api.get<Product[]>('/products');

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e: any) {
      return rejectWithValue(e.response.data.message || 'unexpected error');
    }
  }
);
