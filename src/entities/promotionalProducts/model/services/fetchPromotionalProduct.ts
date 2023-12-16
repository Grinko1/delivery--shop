import { createAsyncThunk } from '@reduxjs/toolkit';

import { type Product } from '../types/promotional';
import { type ThunkConfig } from 'app/providers/storeProvider/config/StateSchema';

// first response data type, second sending data type
export const fetchPromotionalProduct = createAsyncThunk<Product[], void, ThunkConfig<string>>(
  'profile/fetchPromotionalProduct',
  async (_, { extra, rejectWithValue }) => {
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
